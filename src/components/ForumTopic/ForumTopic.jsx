import Button from '../UI/Button/Button';
import classes from './ForumTopic.module.scss';

const ForumTopic = () => {
  return (
    <section className={classes.topic}>
      <h1>
        Форум Microsoft{' '}
        <span>«Finance industry trust in AI and IT-Security»</span>
      </h1>
      <p className={classes['text-main']}>
        Масштабная кибератака и устаревшее оборудование может привести к потере
        клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение
        требований законодательства может привести к существенным штрафам и даже
        к блокировке ресурсов
      </p>
      <p className={classes['text-additional']}>
        Узнайте как этого избежать, регистрируйтесь на наш форум
      </p>
      <Button className={classes.button}>Регистрация</Button>
    </section>
  );
};

export default ForumTopic;
