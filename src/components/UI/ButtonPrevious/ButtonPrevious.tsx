import styles from './ButtonPrevious.module.scss';

interface IButtonPreviousProps {
  children: React.ReactNode;
}

export const ButtonPrevious = ({ children }: IButtonPreviousProps) => {
  return <button className={styles.button}>{children}</button>;
};
