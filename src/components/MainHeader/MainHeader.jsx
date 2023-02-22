import Button from '../UI/Button/Button';
import Logo from '../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation variant="header" />
      <Button className={classes.button}>Регистрация</Button>
    </header>
  );
};

export default MainHeader;
