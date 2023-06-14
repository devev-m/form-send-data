import { HomeCardLink } from './HomeCardLink/HomeCardLink';

import styles from './HomeCardHeader.module.scss';

export const HomeCardHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>ЕМ</div>
      <div className={styles.info}>
        <h2 className={styles.name}>Евгений Машковцев</h2>
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
            href="https://hh.ru/resume/1133d24eff01b4b96c0039ed1f42615a594f6d"
            linkName="Resume"
          />
        </div>
      </div>
    </div>
  );
};
