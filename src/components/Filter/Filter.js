import './filter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookActions, phonebookSelectors } from 'redux/phonebook';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(phonebookSelectors.getFilterQuery);

  return (
    <>
      <input
        value={query}
        type="text"
        name="filter"
        onChange={e =>
          dispatch(phonebookActions.setFilterQuery(e.target.value))
        }
      ></input>
    </>
  );
};

export default Filter;
