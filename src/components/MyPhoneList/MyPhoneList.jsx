import propTypes from 'prop-types';
import styles from './my-phone-list.module.scss';

//закоментував не оптимізований код
// const MyPhoneList = ({ contacts, onDeletePhone }) => {
//   const elements = contacts.map(({ id, name, number }) => (
//     <li className={styles.listItem} key={id}>
//       Name: {name}, Number: {number}.{' '}
//       <button className={styles.button} onClick={() => onDeletePhone(id)}>
//         delete
//       </button>
//     </li>
//   ));

//   return <ol className={styles.list}>{elements}</ol>;
// };

const MyPhoneList = ({ contacts, onDeletePhone }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.listItem} key={id}>
          Name: {name}, Number: {number}.{' '}
          <button className={styles.button} onClick={() => onDeletePhone(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

MyPhoneList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeletePhone: propTypes.func.isRequired,
};

export default MyPhoneList;
