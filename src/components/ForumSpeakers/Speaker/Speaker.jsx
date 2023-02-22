import Card from '../../UI/Card/Card';
import classes from './Speaker.module.scss';

const Speaker = ({ name, description, photoUrl }) => {
  return (
    <Card>
      <img
        className={classes.image}
        src={photoUrl}
        width="250px"
        title="Speakers photo"
        alt={name}
      />
      <p className={classes.name}>{name}</p>
      <p className={classes.description}>{description}</p>
      <a className={classes.link} href="/">
        Подробнее
      </a>
    </Card>
  );
};

export default Speaker;
