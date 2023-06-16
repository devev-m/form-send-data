import styles from './HomeCardLink.module.scss';

interface IHomeCardLinkProps {
  href: string;
  linkName: string;
}

export const HomeCardLink = ({ href, linkName }: IHomeCardLinkProps) => {
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
