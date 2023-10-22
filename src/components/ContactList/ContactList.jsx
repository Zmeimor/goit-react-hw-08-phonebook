import { useEffect } from 'react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import {selectVisibleContacts} from '../../redux/contacts/selectors'
import { ContactItem } from '../ContactItem/ContactItem';
import { Form } from '../Form';
import { Filter } from '../Filter/Filter';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectVisibleContacts, selectLoading, selectError } from '../../redux/contacts/selectors'
import styles from './ContactList.module.css';


export const ContactList = () => {
  const dispatch = useDispatch();
   const visibleContacts = useSelector(selectVisibleContacts);
  const items = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const  error = useSelector(selectError);

 useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      <h1>Phonebook</h1>
      <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
        <Form />
        <h2>Contacts</h2>
        {<Filter />}
        {
          <div>
            {isLoading && <p>Loading contacts...</p>}
            {error && <p>{error}</p>}
            {items.length > 0 && <ContactList />}
          </div>
        }
      </>
   
    <ul className={styles.TaskList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {/* <div>{isLoading && 'Request in progress...'}</div> */}
          <ContactItem id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
    </div>
  );
};