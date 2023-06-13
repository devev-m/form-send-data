import styles from './Modal.module.scss';

interface IModalProps {
  propClass: string;
  children: React.ReactNode;
}

export const Modal = ({ propClass, children }: IModalProps) => {
  return <div className={`${styles.modal} ${styles[propClass]}`}>{children}</div>;
};
