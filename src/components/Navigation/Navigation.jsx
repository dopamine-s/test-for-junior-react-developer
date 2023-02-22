import classnames from 'classnames';
import classes from './Navigation.module.scss';

const Navigation = ({ variant }) => {
  const navListClassnames = classnames(classes.list, {
    [classes.header]: variant === 'header',
    [classes.footer]: variant === 'footer',
  });

  return (
    <nav className={classes.nav}>
      <ul className={navListClassnames}>
        <li>
          <a href="/">О мероприятии</a>
        </li>
        {variant === 'footer' && (
          <>
            <li>
              <a href="/">Темы</a>
            </li>
            <li>
              <a href="/">Расписание</a>
            </li>
          </>
        )}
        <li>
          <a href="/">Спикеры</a>
        </li>
        {variant === 'footer' && (
          <li>
            <a href="/">Контакты</a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
