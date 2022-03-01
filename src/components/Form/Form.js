import { useDispatch } from 'react-redux';
import * as operations from '../../redux/phonebook/phonebook-operations';

import './form.scss';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.phone.value;

    dispatch(operations.addContact([name, phone]));
    form.reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="form__label">
          Name:
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="form__label">
          Tel:
          <input
            placeholder="enter your phone number"
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default Form;
