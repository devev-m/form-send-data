import styles from './ProgressBar.module.scss';

interface IProgressBarProps {
  currentStep: number;
}

export const ProgressBar = ({ currentStep }: IProgressBarProps) => {
  return (
    <div className={styles.progressBar}>
      <div
        className={`${styles.progress} ${
          currentStep === 2 ? styles.half : currentStep === 3 ? styles.full : ''
        }`}
      >
        {currentStep === 1 ? (
          <>
            <img
              className={styles.image}
              src="/active.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/next.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/next.svg"
              alt="icon-current-level"
            />
          </>
        ) : currentStep === 2 ? (
          <>
            <img
              className={styles.image}
              src="/done.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/active.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/next.svg"
              alt="icon-current-level"
            />
          </>
        ) : (
          <>
            <img
              className={styles.image}
              src="/done.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/done.svg"
              alt="icon-current-level"
            />
            <img
              className={styles.image}
              src="/active.svg"
              alt="icon-current-level"
            />
          </>
        )}
      </div>
      <div className={styles.stepNumbers}>
        <span className={`${currentStep >= 1 ? styles.activeSpan : ''}`}>1</span>
        <span className={`${currentStep >= 2 ? styles.activeSpan : ''}`}>2</span>
        <span className={`${currentStep >= 3 ? styles.activeSpan : ''}`}>3</span>
      </div>
    </div>
  );
};
