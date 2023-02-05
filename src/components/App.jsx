import React from 'react';
// import { nanoid } from 'nanoid';
import { IoPersonAdd } from 'react-icons/io5';
import { BsJournalBookmark } from 'react-icons/bs';
import { MdNotListedLocation } from 'react-icons/md';

import { PhoneBook } from './PhoneBook/PhoneBook';
import { AddNewContactBtn, MainTitle } from './PhoneBook/PhoneBook.styled';
import { ContactsList } from './ContactsList/ContactsList';
import {
  ContactsTitle,
  ContactsSection,
  ContactsNumbers,
  NoContactsSpan,
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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <PhoneBookBody>
          <MainTitle>
            Phonebook
            <BsJournalBookmark />
          </MainTitle>
          <AddNewContactBtn onClick={this.showFormHandler}>
            {this.state.isFormVisible ? 'Close form' : <IoPersonAdd />}
          </AddNewContactBtn>
          <FormSection>
            {this.state.isFormVisible && (
              <PhoneBook onSubmit={this.addContact} />
            )}
          </FormSection>
          <ContactsSection>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter onInputHandler={this.filterHandler}></Filter>
            {this.state.contacts.length === 0 ? (
              <NoContactsSpan>
                <MdNotListedLocation />
                There're no contacts
              </NoContactsSpan>
            ) : (
              <ContactsList
                contacts={contacts}
                onDeleteContact={this.deleteContact}
                filterList={this.showFilterList()}
              />
            )}
            <ContactsNumbers>
              {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
            </ContactsNumbers>
          </ContactsSection>
        </PhoneBookBody>
      </div>
    );
  }
}
