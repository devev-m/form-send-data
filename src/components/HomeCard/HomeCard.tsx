import { HomeCardHeader } from './HomeCardHeader/HomeCardHeader';
import { HomeCardMain } from './HomeCardMain/HomeCardMain';

import styles from './HomeCard.module.scss';

export const HomeCard = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.modal}>
        <HomeCardHeader />
        <HomeCardMain />
      </div>
    </div>
  );
};
