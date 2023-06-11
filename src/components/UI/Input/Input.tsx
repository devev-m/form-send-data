import styles from './Input.module.scss';

interface IInputProps {
  labelName: string;
  type: string;
  placeholder: string;
  styleClass: string;
}

export const InputHomePage = ({ labelName, type, placeholder, styleClass }: IInputProps) => {
  return (
    <div className={styles.inner}>
      <label
        className={styles.label}
        htmlFor="input"
      >
        {labelName}
      </label>
      <input
        className={`${styles.input} ${styles[styleClass]}`}
        type={type}
        placeholder={placeholder}
        name="input"
      />
    </div>
  );
};
