import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authorization/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

// import { NavLink } from 'react-router-dom';
// import { NavigationStyled } from './Navigation.styled';

// export const Navigation = () => {
//   return (
//     <NavigationStyled>
//       <NavLink to="/contacts">Contacts</NavLink>
//       <NavLink to="/">Log in</NavLink>
//     </NavigationStyled>
//   );
// };
