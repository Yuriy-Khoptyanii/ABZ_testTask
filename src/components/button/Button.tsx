import './Button.scss';

import cn from 'classnames';

type Props = {
  name: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ name, type, onClick, disabled = false }) => (
  <button
    className={cn('btn', { 'btn--users': name === 'Show more' })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {name}
  </button>
);

export default Button;
