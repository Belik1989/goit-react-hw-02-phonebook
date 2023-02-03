import React from 'react';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <button onClick={() => onDeleteContact(id)} type="button">
            Delete
          </button>
          <span>{name}</span>
          <spant>{number}</spant>
        </li>
      ))}
    </List>
  );
};
