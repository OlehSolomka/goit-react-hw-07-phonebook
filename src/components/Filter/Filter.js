import './filter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterQuery } from '../../redux/phonebook/phonebook-actions';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(({ phonebook }) => phonebook.filter.query);

  return (
    <>
      <input
        value={query}
        type="text"
        name="filter"
        onChange={e => dispatch(setFilterQuery(e.target.value))}
      ></input>
    </>
  );
};

export default Filter;
