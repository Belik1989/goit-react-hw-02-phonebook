import React from 'react';
import { Form } from './PhoneBook.styled';
// import { nanoid } from 'nanoid';
import shortid from 'shortid';

export class PhoneBook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  contactChange = event => {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  contactSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: this.state.name,
      id: shortid.generate(),
      number: this.state.number,
    };
    this.props.onSubmit(newContact);
    this.setState({ name: '', number: '' });
    console.log(newContact);
  };

  render() {
    return (
      <Form onSubmit={this.contactSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Contact name"
            name="name"
            value={this.state.name}
            onChange={this.contactChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.contactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone number"
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}
