import styles from './Header.module.scss';
import { Link } from './Link/Link';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.icon}>АИ</div>
      <div className={styles.info}>
        <h2 className={styles.name}>Иван Иванов</h2>
        <div className={styles.links}>
          <Link
            href="https://web.telegram.org"
            linkName="Telegram"
          />
          <Link
            href="https://github.com/devev-m"
            linkName="GitHub"
          />
          <Link
            href="https://hh.ru/"
            linkName="Resume"
          />
        </div>
      </div>
    </div>
  );
};
