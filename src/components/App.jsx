import React from 'react';
// import { nanoid } from 'nanoid';

import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactsList } from './ContactsList/ContactsList';
import {
  ContactsTitle,
  ContactsSection,
  ContactsNumbers,
} from './ContactsList/ContactsList.styled';
import { Filter } from './Filter/Filter';
import data from './data.json';
import { FormSection, PhoneBookBody } from './PhoneBook/PhoneBook.styled';

export class App extends React.Component {
  state = {
    contacts: data,
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

  showFormHandler = event => {
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <PhoneBookBody>
        <FormSection>
          <h1>Phonebook</h1>
          <button onClick={this.showFormHandler} style={{ marginTop: 20 }}>
            New contact
          </button>
          {this.state.isFormVisible && <PhoneBook onSubmit={this.addContact} />}
        </FormSection>
        <ContactsSection>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter onInputHandler={this.filterHandler}></Filter>
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
            filterList={this.showFilterList()}
          />
          <ContactsNumbers>
            {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
          </ContactsNumbers>
        </ContactsSection>
      </PhoneBookBody>
    );
  }
}
