import './UserCard.scss';

import { Tooltip } from 'react-tooltip';

import { User } from '../../types/allTypes';

type Props = {
  user: User;
};

export const UserCard: React.FC<Props> = ({ user }) => {
  const { name, phone, photo, position, email } = user;
  return (
    <>
      <div className="userCard">
        <img src={photo} alt="photoUser" className="userCard__img" />
        <p
          className="userCard__name truncated"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={name}
        >
          {name}
        </p>
        <div className="userCard__details">
          <p
            className="userCard__details__position truncated"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={position}
          >
            {position}
          </p>
          <p
            className="userCard__details__email truncated"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={email}
          >
            {email}
          </p>
          <p
            className="userCard__details__phone truncated"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={phone}
          >
            {phone}
          </p>
        </div>
      </div>
      <Tooltip id="my-tooltip" clickable place="bottom" />
    </>
  );
};
