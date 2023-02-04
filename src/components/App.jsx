import React from 'react';
// import { nanoid } from 'nanoid';

import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsTitle } from './ContactsList/ContactsList.styled';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(newContact.name + ' is already in contacts');
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterHandler = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  showFilterList = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <section>
          <h1>Phonebook</h1>
          <PhoneBook onSubmit={this.addContact} />
        </section>
        <section>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onInputHandler={this.filterHandler}></Filter>
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
            filterList={this.showFilterList()}
          />
          <span>
            {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
          </span>
        </section>
      </div>
    );
  }
}
