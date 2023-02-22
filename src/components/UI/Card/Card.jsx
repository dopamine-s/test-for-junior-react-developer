import classnames from 'classnames';
import classes from './Card.module.scss';

const Card = (props) => {
  const cardClasses = classnames(classes.card, props.className);

  return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
