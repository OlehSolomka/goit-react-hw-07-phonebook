import './styles/base.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as operations from './redux/phonebook/phonebook-operations';
import Section from './components/Section';
import Form from './components/Form';
import Contactlist from './components/Contactlist';
import Filter from './components/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(({ phonebook }) => phonebook.contacts);
  const loading = useSelector(({ phonebook }) => phonebook.loading);
  const filterQuery = useSelector(({ phonebook }) => phonebook.filter.query);

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  const getVIsibleContacts = () => {
    const normalizedFilter = filterQuery.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredItems = getVIsibleContacts();

  return (
    <div className="root">
      <h1 className="header">Phonebook</h1>
      <Form />
      <Section title={'Contacts'}>
        <Filter />
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          <Contactlist
            contacts={filteredItems}
            onDelete={name => dispatch(operations.deleteContact(name))}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
