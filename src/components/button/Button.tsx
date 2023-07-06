import './Button.scss';

import { useScroll } from '../../hooks/useScroll';

type Props = {
  name: string;
  sectionId: string;
};

const Button: React.FC<Props> = ({ name, sectionId }) => {
  const scrollToSection = useScroll();

  return (
    <button className="btn" type="button" onClick={() => scrollToSection(sectionId)}>
      {name}
    </button>
  );
};

export default Button;
