import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import css from '../Modules/phoneBook.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from '../Redux/selectors';
import { ThreeDots } from 'react-loader-spinner';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect( () => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className={`${css.container} ${css.basicFont}`}>
      <h1 className={`${css.basicFont} ${css.logo}`}>Phonebook</h1>
      <ContactForm/>
      <h2 className={`${css.basicFont} ${css.logo}`}>Contacts</h2>
      <Filter/>
      {isLoading && !error && (
      <div className={css.loadingOverlay}>
      <b className={css.FetchLogo}><ThreeDots  height={290} width={300} color="#5a5aed"/></b>
      </div>
      )}
      <ContactList/>
      <ToastContainer autoClose={6000} theme="dark" />
    </div>
  );
};

