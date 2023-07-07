import './UsersInfo.scss';

import { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';

import { getUsers } from '../../api';
import Button from '../Button';
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
          setIsLoading(false);
          return;
        }

        if (endPoint !== '/users?count=6') {
          setUsers((prev) => [...prev, ...data.users]);
        } else {
          setUsers(data.users);
        }

        setIsLoading(false);
      } catch {
        toast.error('no users loaded');
      }
    };

    fetchData();
  }, [endPoint]);

  useEffect(() => {
    const fetchData = async () => {
      if (isUpdated && endPoint !== '/users?count=6') {
        setUsers([]);
        setEndPoint('/users?count=6');
        setIsLastPage(false);
      }

      if (isUpdated && endPoint === '/users?count=6') {
        try {
          setIsLoading(true);

          const data = await getUsers(endPoint);
          setUsers(data.users);
        } catch {
          toast.error('no users loaded');
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
    } catch {
      toast.error('no users loaded');
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
        <Button name="Show more" type="button" onClick={handleClickShowMore} />
      )}
    </div>
  );
};

export default UsersInfo;
