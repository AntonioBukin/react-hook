import PropTypes from 'prop-types';
import styles from '../VoteBlock/vote-block.module.scss';

const VoteActions = ({ options, leaveVote }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          className={styles.btn}
          onClick={() => leaveVote(option)}
        >
          {option}
        </button>
      ))}
    </div>
    
  );
};

VoteActions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveVote: PropTypes.func.isRequired,
};

export default VoteActions;

 //не оптимізований код
    // <>
    //   <button className={styles.btn} onClick={() => leaveVote('good')}>
    //     Good
    //   </button>
    //   <button className={styles.btn} onClick={() => leaveVote('neutral')}>
    //     Neutral
    //   </button>
    //   <button className={styles.btn} onClick={() => leaveVote('bad')}>
    //     Bad
    //   </button>
    // </>
