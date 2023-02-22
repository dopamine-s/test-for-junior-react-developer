import { v4 as uuidv4 } from 'uuid';
import Speaker from '../Speaker/Speaker';
import classes from './SpeakersList.module.scss';

const SpeakersList = ({ speakers }) => {
  return (
    <ul className={classes.list}>
      {speakers.map(
        ({ description, gender, name, performance_time, photo_url }) => (
          <Speaker
            key={uuidv4()}
            description={description}
            gender={gender}
            name={name}
            performanceTime={performance_time}
            photoUrl={photo_url}
          />
        )
      )}
    </ul>
  );
};

export default SpeakersList;
