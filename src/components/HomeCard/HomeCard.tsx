import { Modal } from '../Modal/Modal';
import { HomeCardHeader } from './HomeCardHeader/HomeCardHeader';
import { HomeCardMain } from './HomeCardMain/HomeCardMain';

import styles from './HomeCard.module.scss';

export const HomeCard = () => {
  return (
    <div className={styles.inner}>
      <Modal propClass="home">
        <HomeCardHeader />
        <HomeCardMain />
      </Modal>
    </div>
  );
};
