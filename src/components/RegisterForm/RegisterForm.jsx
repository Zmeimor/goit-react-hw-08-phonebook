import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/authorization/operations';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    console.log(name);

    form.reset();
  };

  return (
    <form
    className={styles.Forms}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label
       className={styles.registNEP}
      >
        Username
        <input type="text" name="name" />
      </label>
      <label
      className={styles.registNEP}
      >
        Email
        <input type="email" name="email" />
      </label>
      <label
      className={styles.registNEP}
      >
        Password
        <input type="password" name="password" />
      </label>
      <button
      className={styles.Regist}
       type="submit">Register</button>
    </form>
  );
};
