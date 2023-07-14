import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'Redux/operations';
import PropTypes from 'prop-types';
import css from "../Modules/phoneBook.module.css";
import { useEffect } from 'react';
import { selectContacts, selectStatusFilter } from '../Redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  useEffect ( () => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
      <li className={`${css.basicFont} ${css.contactInfo}`} key={id}>{name}: {number}
      <button className={`${css.basicFont} ${css.buttonContacts}`} onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
