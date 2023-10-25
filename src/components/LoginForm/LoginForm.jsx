import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/operations';
 import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
    className={styles.Forms}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label
      className={styles.LogineEP}
      >
        Email
        <input type="email" name="email" />
      </label>
      <label
      className={styles.LogineEP}
      >
        Password
        <input type="password" name="password" />
      </label>
      <button
      className={styles.LogIN}
       type="submit">Log In</button>
    </form>
  );
};
