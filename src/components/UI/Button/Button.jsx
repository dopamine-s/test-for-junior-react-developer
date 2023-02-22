import classnames from 'classnames';
import classes from './Button.module.scss';

const Button = (props) => {
  const buttonClasses = classnames(classes.button, props.className);
  return (
    <button type="type" className={buttonClasses}>
      {props.children}
    </button>
  );
};

export default Button;
