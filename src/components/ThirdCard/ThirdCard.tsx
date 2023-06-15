import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './ThirdCard.module.scss';

interface IFormInput {
  about: string;
}

export const ThirdCard = () => {
  const [text, setText] = useState('');

  const maxLength = 200;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className={styles.thirdCard}>
      <div className={styles.inner}>
        <ProgressBar currentStep={3} />

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.label}>
            About
            <textarea
              className={styles.textarea}
              placeholder="Placeholder"
              value={text}
              {...register('about', { required: true, maxLength })}
              onChange={(e) => handleChange(e)}
            />
            <span className={styles.counter}>{text.replace(/\s/g, '').length}</span>
          </label>
          {errors.about?.type === 'required' && (
            <p className={styles.error}>Поле обязательно для заполнения</p>
          )}
          {errors.about?.type === 'maxLength' && (
            <p className={styles.error}>Превышено максимальное количество символов</p>
          )}
          <button
            className={styles.buttonNext}
            type="submit"
          >
            Отправить
          </button>
          <Link
            to="/step-two"
            className={styles.buttonBack}
          >
            Назад
          </Link>
        </form>
      </div>
    </div>
  );
};
