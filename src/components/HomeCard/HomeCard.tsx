import { Modal } from '../Modal/Modal';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

import styles from './HomeCard.module.scss';

export const HomeCard = () => {
  return (
    <div className={styles.inner}>
      <Modal view="home">
        <Header />
        <Main />
      </Modal>
    </div>
  );
};
