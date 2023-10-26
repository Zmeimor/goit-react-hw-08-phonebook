import styles from './ContactList.module.css';
import { useEffect } from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { fetchContacts } from '../../redux/contax/operations';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../redux/contax/selectors';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Form } from '../Form';
import { Filter } from '../Filter/Filter';

import { ContactItem } from 'components/ContactItem/ContactItem';

const ContactList = () => {
 
  const {
    // items,
    isLoading,
    error,
  } = useSelector(selectContacts);
  const getVisibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
    // console.log(dispatch);
  }, [dispatch]);

  // console.log(getVisibleContacts);
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Your contacts</title>
          </Helmet>
          <h1>Phonebook</h1>
        </div>
      </HelmetProvider>
      {<Form />}
      <h2>Contacts</h2>
      {<Filter />}

      {
        <div>
          {isLoading && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}
          {getVisibleContacts.length > 0 && (
            <ul className={styles.TaskList}>
              <>
                {getVisibleContacts.map(({ id, name, number }) => (
                  <li className={styles.TaskList_item} key={id}>
                    {/* <div>{isLoading && 'Request in progress...'}</div> */}
                    <ContactItem id={id} name={name} number={number} />
                  </li>
                ))}
              </>
            </ul>
          )}
        </div>
      }
    </div>
  );
};

export default ContactList;
