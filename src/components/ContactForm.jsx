import { useState } from 'react';
import { nanoid } from 'nanoid';
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { addContact} from '../Redux/operations';
import css from "../Modules/phoneBook.module.css";
import { selectContacts } from '../Redux/selectors';

const ContactForm = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(({ name }) => name === contactName)) {
      toast.info(`We're sorry, but ${contactName} is already in your contacts!`);
      return;
    }
    dispatch(addContact({
      name: contactName,
      number,
      id: nanoid(),
      })
    );

    setcontactName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setcontactName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={`${css.basicFont} ${css.form}`} onSubmit={handleSubmit}>
    <label className={`${css.basicFont} ${css.label}`}>Name:
    <input className={`${css.basicFont} ${css.input}`} type="text" name="name" value={contactName} onChange={handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    </label>
    <label className={`${css.basicFont} ${css.label}`}>Number:
    <input className={`${css.basicFont} ${css.input}`} type="tel" name="number" value={number} onChange={handleChange}
     pattern="[0-9+]+"
     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     required
    />
    </label>
    <button className={`${css.basicFont} ${css.button}`} type="submit">Add Contact</button>
</form>
);
};

 export default ContactForm;