import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav className={styles.topNav}>
      <img src={logo} alt="Logo of Nagarro" width="120" />
      <menu className={styles.mainMenu}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="weather">Weather</NavLink>
        </li>
      </menu>
    </nav>
  );
}
