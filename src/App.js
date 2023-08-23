import { Component } from 'react';
import { nanoid } from 'nanoid';

import MyPhoneBlock from './components/MyPhoneBlock/MyPhoneBlock';
import MyPhoneList from './components/MyPhoneList/MyPhoneList';
import MyPhoneForm from './components/MyPhoneForm/MyPhoneForm';

import styles from './index.module.scss';
import './shared/styles/styles.scss';

//1. Створюємо класовий компонент
class MyPhone extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  onAddPhone = ({ name, number }) => {
    if (this.isDublicate({ name, number })) {
      return alert(`${name} - ${number} is alredy in contacts`);
    }
    this.setState(prevState => {
      const { contacts } = prevState;
      const newPhone = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [...contacts, newPhone] };
    });
  };

  onDeletePhone = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );

      return {
        contacts: newContacts,
      };
    });
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(dublicate);
  }

  getFilteredPhone() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
      //||number.toLowerCase().includes(normalizedFilter) - прибрав фільтр пошуку по номеру
    });

    return result;
  }

  render() {
    //пишемо метод render, який буде повертати розмітку
    const contacts = this.getFilteredPhone();

    return (
      <div className="container">
        <div className={styles.wrapper}>
          <h3 className={styles.title}>My Phone</h3>
          <div className={styles.blocks}>
            <MyPhoneBlock title="">
              <MyPhoneForm onSubmit={this.onAddPhone} />
            </MyPhoneBlock>
            <MyPhoneBlock title="Find contacts by name">
              <input
                name="filter"
                onChange={this.handleFilter}
                className={styles.textField}
                placeholder="enter number"
              />
              <MyPhoneList
                contacts={contacts}
                onDeletePhone={this.onDeletePhone}
              />
            </MyPhoneBlock>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPhone;
