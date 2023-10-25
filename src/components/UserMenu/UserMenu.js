import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/authorization/selectors';
import { logOut } from '../redux/authorization/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome user:{user.name}</p>
      <button type="button" onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};
