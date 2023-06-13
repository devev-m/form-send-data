import styles from './HomeCardLink.module.scss';

interface IHomeCardLink {
  href: string;
  linkName: string;
}

export const HomeCardLink = ({ href, linkName }: IHomeCardLink) => {
  return (
    <div className={styles.inner}>
      <img
        className={styles.image}
        src="/folder.svg"
        alt="folder-logo"
      />
      <a
        className={styles.link}
        href={href}
        target="_blank"
      >
        {linkName}
      </a>
    </div>
  );
};
