import styles from './Link.module.scss';

interface ILink {
  href: string;
  linkName: string;
}

export const Link = ({ href, linkName }: ILink) => {
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
