import { Outlet } from 'react-router-dom';
import styles from './Default.module.css';

const DefaultLayout = () => {
  return (
    <div className={styles.defaultLayout}>
      <header>
        Header
        <img src="/logo512.png" />
      </header>

      <Outlet></Outlet>

      <footer>Footer</footer>
    </div>
  );
};

export default DefaultLayout;
