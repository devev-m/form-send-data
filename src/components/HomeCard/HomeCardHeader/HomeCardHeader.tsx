import { HomeCardLink } from './HomeCardLink/HomeCardLink';

import styles from './HomeCardHeader.module.scss';

export const HomeCardHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>АИ</div>
      <div className={styles.info}>
        <h2 className={styles.name}>Иван Иванов</h2>
        <div className={styles.links}>
          <HomeCardLink
            href="https://t.me/devev_m"
            linkName="Telegram"
          />
          <HomeCardLink
            href="https://github.com/devev-m"
            linkName="GitHub"
          />
          <HomeCardLink
            href="https://hh.ru/"
            linkName="Resume"
          />
        </div>
      </div>
    </div>
  );
};
