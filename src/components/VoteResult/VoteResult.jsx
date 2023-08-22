import PropTypes from 'prop-types';

const VoteResult = ({ goodResult, total, good, neutral, bad }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {goodResult} %</p>
    </>
  );
};

VoteResult.propTypes = {
  goodResult: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default VoteResult;
