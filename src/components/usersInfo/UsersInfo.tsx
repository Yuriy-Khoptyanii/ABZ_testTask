import './UsersInfo.scss';

import { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/ClipLoader';

import { getUsers } from '../../api';
import UserCard from '../UserCard';

type Props = {
  isUpdated: boolean;
};

const UsersInfo: React.FC<Props> = ({ isUpdated }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [endPoint, setEndPoint] = useState('/users?count=6');
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await getUsers(endPoint);

        if (data.links.next_url === null) {
          setIsLastPage(true);
          return;
        }

        if (endPoint !== '/users?count=6') {
          setUsers((prev) => [...prev, ...data.users]);
        } else {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [endPoint]);

  useEffect(() => {
    const fetchData = async () => {
      if (isUpdated && endPoint !== '/users?count=6') {
        setUsers([]);
        setEndPoint('/users?count=6');
      }

      if (isUpdated && endPoint === '/users?count=6') {
        try {
          setIsLoading(true);

          const data = await getUsers(endPoint);
          setUsers(data.users);
        } catch (error) {
          console.log(error);
        }

        setIsLoading(false);
      }
    };

    fetchData();
  }, [isUpdated]);

  const handleClickShowMore = async () => {
    try {
      const data = await getUsers(endPoint);
      setEndPoint(data.links.next_url.split('v1')[1]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="usersInfo" id="users">
      <h1 className="usersInfo__title">Working with GET request</h1>
      <div className="usersList">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
      {isLoading && (
        <div className="users__loader">
          <SyncLoader loading={isLoading} size={48} color="#00BDD3" />
        </div>
      )}
      {!isLastPage && (
        <button className="btn btn--users" type="button" onClick={handleClickShowMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default UsersInfo;
