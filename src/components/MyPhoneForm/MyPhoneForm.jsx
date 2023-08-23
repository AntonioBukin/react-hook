import { useState } from 'react';
import propTypes from 'prop-types';
import styles from './my-phone-form.module.scss';

const MyPhoneForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    //value - значення яке ми записуємо в state
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Name:</label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={styles.textField}
          placeholder="add name"
          type="text"
          //   name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        {/* <input className={styles.textField} placeholder="add name"/> */}
      </div>
      <div className={styles.formGroup}>
        <label>Number:</label>
        <input
          value={number}
          name="number"
          onChange={handleChange}
          className={styles.textField}
          placeholder="add number"
          type="text"
          //   name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        {/* <input className={styles.textField} placeholder="add name"/> */}
      </div>
      <button className={styles.button} type="submit">
        Add contacts
      </button>
    </form>
  );
};

export default MyPhoneForm;

MyPhoneForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
