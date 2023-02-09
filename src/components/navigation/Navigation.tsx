import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <nav className={style.navigation}>
      <h1 className={style.navigation_title}>Search</h1>
      <div className={style.navigation_items}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/items'>Items</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
