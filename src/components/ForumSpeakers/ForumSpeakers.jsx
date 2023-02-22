import { useEffect, useState } from 'react';

import { getData } from '../../api/api';
import classes from './ForumSpeakers.module.scss';
import SpeakersList from './SpeakersList/SpeakersList';

const ForumSpeakers = () => {
  const [forumSpeakers, setforumSpeakers] = useState([]);

  useEffect(() => {
    const getSpeakers = async () => {
      const speakers = await getData();
      setforumSpeakers(speakers);
    };
    getSpeakers();
  }, []);

  return (
    <section className={classes.speakers}>
      <h2>Спикеры нашего форума</h2>
      {forumSpeakers.length > 0 ? (
        <SpeakersList speakers={forumSpeakers} />
      ) : (
        <p className={classes.center}>Информация уточняется...</p>
      )}
    </section>
  );
};

export default ForumSpeakers;
