import PropTypes from 'prop-types';
import styles from './vote-block.module.scss';

const VoteBlock = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.blockTitle}>{title}</h4>
      {children}
    </div>
  );
};

VoteBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default VoteBlock;
