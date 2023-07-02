import './Button.scss';

type Props = {
  name: string;
};

export const Button: React.FC<Props> = ({ name }) => {
  return (
    <button className="btn" type="button">
      {name}
    </button>
  );
};
