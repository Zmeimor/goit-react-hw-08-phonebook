import { useDispatch, useSelector } from 'react-redux';
import {selectFilter } from '../../redux/contacts/selectors';
import {setFilter } from '../../redux/contacts/filtersSlice';
export const Filter = () => {
const filter = useSelector(selectFilter);
const dispatch = useDispatch();

  return (
    <div>
      Find contacts by name
      <input
        type="text"
        name={filter}
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}

