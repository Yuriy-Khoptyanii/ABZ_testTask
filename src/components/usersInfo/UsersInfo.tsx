import './UsersInfo.scss';

import { useEffect, useState } from 'react';
import SyncLoader from 'react-spinners/ClipLoader';

import { getUsers } from '../../api';
import { User } from '../../types/allTypes';
import { UserCard } from '../userCard/UserCard';

type Props = {
  isUpdated: boolean;
};

export const UsersInfo: React.FC<Props> = ({ isUpdated }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [endPoint, setEndPoint] = useState('/users?count=6');
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getUsers(endPoint)
      .then((data) => {
        if (data.links.next_url === null) {
          setIsLastPage(true);

          return;
        }

        if (endPoint !== '/users?count=6') {
          setUsers((prev) => [...prev, ...data.users]);
        } else {
          setUsers(data.users);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isUpdated, endPoint]);

  const handleClickShowMore = () => {
    getUsers(endPoint).then((data) => {
      setEndPoint(data.links.next_url.split('v1')[1]);
    });
  };

  return (
    <div className="usersInfo">
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
