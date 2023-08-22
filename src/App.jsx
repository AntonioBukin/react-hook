import { useState } from 'react';

import VoteActions from './components/VoteActions/VoteActions';
import VoteResult from './components/VoteResult/VoteResult';
import VoteBlock from './components/VoteBlock/VoteBlock';
import Notification from './components/VoteNotification/VoteNotification';

import styles from './index.module.scss';
import './styles/styles.scss';

const Vote = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  //коротчший варіант
  const leaveVote = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  // const leaveVote = option => {
  //   setState(prevState => {
  //     const value = prevState[option];
  //     return {
  //       ...prevState,
  //       [option]: value + 1,
  //     };
  //   });
  // };

  const countTotalFeedback = () => {
    //метод який порахує нам загальну кількість
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const value = countTotalFeedback();
    return good > 0 ? Math.round((good / value) * 100) : 0;
  };

  const { good, neutral, bad } = state;

  const stateName = Object.keys(state);

  const total = countTotalFeedback(state);

  const goodResult = countPositiveFeedbackPercentage('good');

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <VoteBlock title="Please leave feedback:">
          <VoteActions options={stateName} leaveVote={leaveVote} />
        </VoteBlock>
        <VoteBlock title="Results:">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <VoteResult
              goodResult={goodResult}
              total={total}
              good={good}
              neutral={neutral}
              bad={bad}
            />
          )}
        </VoteBlock>
      </div>
    </div>
  );
};

export default Vote;
