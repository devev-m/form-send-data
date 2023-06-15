import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';

interface IModalProps {
  success: boolean;
  closeModal: (e: React.MouseEvent) => void;
}

export const Modal = ({ success, closeModal }: IModalProps) => {
  return (
    <>
      <div className={styles.wrapper} />
      <div className={styles.modal}>
        {success ? (
          <>
            <h2 className={styles.title}>Форма успешно отправлена</h2>
            <img
              className={styles.successImg}
              src="/success-icon.svg"
              alt="success-icon"
            />
            <Link
              className={styles.button}
              to="/"
            >
              На главную
            </Link>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>Ошибка</h2>
              <a
                href=""
                onClick={closeModal}
              >
                <img
                  className={styles.closeImg}
                  src="/close-icon.svg"
                  alt="close-icon"
                />
              </a>
            </div>
            <img
              className={styles.errorImg}
              src="/error-icon.svg"
              alt="error-icon"
            />
            <button className={`${styles.button} ${styles.right}`}>Закрыть</button>
          </>
        )}
      </div>
    </>
  );
};
