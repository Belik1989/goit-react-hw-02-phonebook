import React from 'react';
export const ContactForm = () => {
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        placeholder="Contact name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <button type="button">Add contact</button>
    </form>
  );
};
