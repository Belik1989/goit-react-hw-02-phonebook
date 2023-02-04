import React from 'react';
import { List } from './ContactsList.styled';

export class ContactsList extends React.Component {
  state = {
    contact: {},
  };
  render() {
    return (
      <List>
        {this.props.filterList.map(contact => (
          <li key={contact.id}>
            <button
              onClick={() => this.props.onDeleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
          </li>
        ))}
      </List>
    );
  }
}
