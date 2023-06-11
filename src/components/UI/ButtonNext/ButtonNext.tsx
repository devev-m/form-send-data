import styles from './ButtonNext.module.scss';

interface IButtonNextProps {
  children: React.ReactNode;
}

export const ButtonNext = ({ children }: IButtonNextProps) => {
  return <button className={styles.button}>{children}</button>;
};
