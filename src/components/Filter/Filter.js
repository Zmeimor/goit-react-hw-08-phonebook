import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/contax/filtersSlice';
import { selectFilter } from '../../redux/contax/selectors';

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
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

