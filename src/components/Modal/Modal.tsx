import styles from './Modal.module.scss';

interface IModalProps {
  view: string;
  children: React.ReactNode;
}

export const Modal = ({ view, children }: IModalProps) => {
  return <div className={`${styles.modal} ${styles[view]}`}>{children}</div>;
};
