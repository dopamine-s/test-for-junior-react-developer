import logoImg from '../../../images/logo-icon.svg';
import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
      <img
        src={logoImg}
        width="48"
        title="Security Forum Logo"
        alt="Security Forum Logo"
      />
      <p className={classes['logo-text']}>
        Security <span>Forum</span>
      </p>
    </a>
  );
};

export default Logo;
