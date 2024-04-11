import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Nav.module.css';
import clsx from 'clsx';

export function Nav() {
  return (
    <nav className={styles.topNav}>
      <img src={logo} alt="Logo of Nagarro" width="120" />
      <menu className={clsx(styles.mainMenu, 'flex-grow')}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="weather">Weather</NavLink>
        </li>
        <li className="ml-auto">
          <NavLink to="register">Register</NavLink>
        </li>
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
      </menu>
    </nav>
  );
}
