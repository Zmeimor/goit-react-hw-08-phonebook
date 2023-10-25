import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contax/operations';
// import { getContacts } from './redux/contax/selectors';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { refreshUser } from './redux/authorization/operations';
import { selectIsRefreshing } from './redux/authorization/selectors';

// import { useAuth } from '../hook/useAuth';

// import { setStatusFilter } from './redux/filtersSlice';
const ContactList = lazy(() => import('./ContactList/ContactList'));
const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));

export function App() {
  const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(getContacts);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
    console.log(dispatch);
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
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
            <PrivateRoute redirectTo="/login" component={<ContactList />} />
          }
        />
      </Route>
    </Routes>
  );
}
