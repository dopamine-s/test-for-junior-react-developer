import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';
import classes from './RootLayout.module.scss';

const RootLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{children}</main>
      <MainFooter />
    </>
  );
};

export default RootLayout;
