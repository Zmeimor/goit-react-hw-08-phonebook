import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          {/* <p> */}
          {/* Haven't got an acount yet? */}
          <title>Login</title>
          {/* </p> */}
        </Helmet>
        <LoginForm />
      </div>
    </HelmetProvider>
  );
}
