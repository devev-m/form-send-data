import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './SecondCard.module.scss';

const schema = yup.object({
  advantage: yup.string().required('Введите Advantage'),
});

interface IFormData {
  advantages: string[];
}

export const SecondCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div className={styles.inner}>
      <div className={styles.modal}>
        <ProgressBar currentStep={2} />

        <div className={styles.formWrapper}>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className={styles.label}>
              Advantages
              <div className={styles.advantages}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Placeholder"
                  {...register('advantage', {
                    required: true,
                  })}
                />
                <button
                  className={styles.buttonDelete}
                  type="button"
                >
                  <img
                    src="/delete.svg"
                    alt="delete-icon"
                  />
                </button>
              </div>
              {errors.advantage?.message}
            </label>

            <button
              className={`${styles.buttonBack} ${styles.buttonAdd}`}
              type="button"
            />

            <div className={styles.checkboxGroup}>
              Checkbox group
              <label>
                <input
                  type="checkbox"
                  value="1"
                />
                <span className={styles.checkboxImage}></span>1
              </label>
              <label>
                <input
                  type="checkbox"
                  value="2"
                />
                <span className={styles.checkboxImage}></span>2
              </label>
              <label>
                <input
                  type="checkbox"
                  value="3"
                />
                <span className={styles.checkboxImage}></span>3
              </label>
            </div>

            <div className={styles.radioGroup}>
              Radio group
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="1"
                />
                <span className={styles.radioImage}></span>1
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="2"
                />
                <span className={styles.radioImage}></span>2
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="3"
                />
                <span className={styles.radioImage}></span>3
              </label>
            </div>

            <button
              className={styles.buttonNext}
              type="submit"
            >
              Далее
            </button>
          </form>
          <Link
            to="/step-one"
            className={styles.buttonBack}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
