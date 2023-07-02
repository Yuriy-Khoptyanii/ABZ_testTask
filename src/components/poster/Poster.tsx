import './Poster.scss';

import { Button } from '../button/Button';

function Poster() {
  return (
    <div className="poster">
      <div className="wrapper">
        <h1 className="poster__title">Test assignment for front-end developer</h1>
        <p className="poster__text">
          What defines a good front-end developer is one that has skilled knowledge of
          HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll
          be building web interfaces with accessibility in mind. They should also be
          excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <Button name={'Sign up'} />
      </div>
    </div>
  );
}

export default Poster;
