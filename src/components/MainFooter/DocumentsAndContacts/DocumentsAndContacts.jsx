import classes from './DocumentsAndContacts.module.scss';

const DocumentsAndContacts = () => {
  return (
    <nav className={classes.documents}>
      <ul className={classes.list}>
        <li>
          <a href="/">Политика конфиденциальности</a>
        </li>
        <li>
          <a href="/">Публичная оферта</a>
        </li>
        <li>
          <a href="tel:+79121234567">+7 912 123-45-67</a>
        </li>
        <li>
          <a href="mailto:about@microsoftforum.com">about@microsoftforum.com</a>
        </li>
      </ul>
    </nav>
  );
};

export default DocumentsAndContacts;
