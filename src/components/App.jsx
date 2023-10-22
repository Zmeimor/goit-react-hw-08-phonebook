import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { useDispatch } from 'react-redux';
;
// import { ContactList } from './ContactList/ContactList';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactListPage = lazy(() => import('./ContactList/ContactList'));

export function App() {
  const dispatch = useDispatch();
  // const items = useSelector(selectVisibleContacts);
  // const isLoading = useSelector(selectLoading);
  // const  error = useSelector(selectError);
  const { isRefreshing } = useAuth();
console.log(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
    // dispatch(fetchContacts());
  }, [dispatch]);
 
  console.log(ContactListPage)
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactListPage />} />
          }
        />
      </Route>
    </Routes>
  );
  
  
  
}
