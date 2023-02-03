import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsTitle } from './ContactsList/ContactsList.styled';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <section>
          <h1>Phonebook</h1>
          <ContactForm />
        </section>
        <section>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
          <span>
            {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
          </span>
        </section>
      </div>
    );
  }
}
