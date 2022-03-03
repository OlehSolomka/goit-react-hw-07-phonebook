import 'styles/base.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { phonebookOperations, phonebookSelectors } from 'redux/phonebook';
import Section from 'components/Section';
import Form from 'components/Form';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getContact);
  const loading = useSelector(phonebookSelectors.getLoading);
  const filterQuery = useSelector(phonebookSelectors.getFilterQuery);

  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
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
            onDelete={id => dispatch(phonebookOperations.deleteContact(id))}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
