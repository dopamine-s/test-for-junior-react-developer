import vkImg from '../../images/vk-icon.svg';
import facebookImg from '../../images/facebook-icon.svg';
import instagramImg from '../../images/instagram-icon.svg';
import telegramImg from '../../images/telegram-icon.svg';
import classes from './Socials.module.scss';

const Socials = () => {
  return (
    <nav className={classes.socials}>
      <ul>
        <li>
          <a
            className={classes.social}
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <img
              className={classes.icon}
              src={vkImg}
              width="22"
              title="VK Link"
              alt="VK Link Logo"
            />
          </a>
        </li>
        <li>
          <a
            className={classes.social}
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <img
              className={classes.icon}
              src={facebookImg}
              width="10"
              title="Facebook Link"
              alt="Facebook Link Logo"
            />
          </a>
        </li>
        <li>
          <a
            className={classes.social}
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <img
              className={classes.icon}
              src={instagramImg}
              width="20"
              title="Instagram Link"
              alt="Instagram Link Logo"
            />
          </a>
        </li>
        <li>
          <a
            className={classes.social}
            target="_blank"
            href="/"
            rel="noreferrer"
          >
            <img
              className={classes.icon}
              src={telegramImg}
              width="20"
              title="Telegram Link"
              alt="Telegram Link Logo"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Socials;
