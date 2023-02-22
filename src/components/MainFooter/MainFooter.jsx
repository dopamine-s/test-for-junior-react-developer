import Logo from '../UI/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import classes from './MainFooter.module.scss';
import DocumentsAndContacts from './DocumentsAndContacts/DocumentsAndContacts';
import Socials from '../Socials/Socials';

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <Logo />
      <DocumentsAndContacts />
      <Navigation variant="footer" />
      <Socials />
    </footer>
  );
};

export default MainFooter;
