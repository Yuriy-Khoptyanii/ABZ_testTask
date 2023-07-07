import './SuccessBanner.scss';

import successImg from '../../assets/success-image-new.svg';

const SuccessBanner = () => (
  <div className="successBanner">
    <h1 className="successBanner__title">User successfully registered</h1>
    <img src={successImg} alt="succeed registration" className="successBanner__img" />
  </div>
);

export default SuccessBanner;
