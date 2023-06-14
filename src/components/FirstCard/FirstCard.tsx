import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './FirstCard.module.scss';

enum Sex {
  man = 'man',
  woman = 'woman',
}

const schema = yup.object({
  nickname: yup
    .string()
    .required('Введите Nickname')
    .matches(/^[\p{L}\d]+$/u, 'Введите только буквы и цифры')
    .max(30, 'Максимальная длина поля - 30 символов'),
  name: yup
    .string()
    .required('Введите Name')
    .matches(/^[\p{L}]+$/u, 'Введите только буквы')
    .max(50, 'Максимальная длина поля - 50 символов'),
  sername: yup
    .string()
    .required('Введите Sername')
    .matches(/^[\p{L}]+$/u, 'Введите только буквы')
    .max(50, 'Максимальная длина поля - 50 символов'),
  sex: yup.string().oneOf(Object.values(Sex)).required('Выберите пол'),
});

interface IFormData {
  nickname: string;
  name: string;
  sername: string;
  sex: Sex;
}

export const FirstCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div className={styles.inner}>
      <div className={styles.modal}>
        <ProgressBar currentStep={1} />

        <div className={styles.formWrapper}>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className={styles.label}>
              Nickname
              <input
                className={styles.input}
                type="text"
                placeholder="Placeholder"
                {...register('nickname', {
                  required: true,
                })}
              />
              {errors.nickname?.message}
            </label>

            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                type="text"
                placeholder="Placeholder"
                {...register('name', {
                  required: true,
                })}
              />
              {errors.name?.message}
            </label>

            <label className={styles.label}>
              Sername
              <input
                className={styles.input}
                type="text"
                placeholder="Placeholder"
                {...register('sername', {
                  required: true,
                })}
              />
              {errors.sername?.message}
            </label>

            <label className={styles.label}>
              Sex
              <select
                className={styles.input}
                {...register('sex', { required: true })}
              >
                <option
                  className={styles.input}
                  value=""
                >
                  Не выбрано
                </option>
                <option value={Sex.man}>man</option>
                <option value={Sex.woman}>woman</option>
              </select>
              {errors.sex?.message}
            </label>

            <button
              className={styles.buttonNext}
              type="submit"
            >
              Далее
            </button>
          </form>
          <Link
            to="/"
            className={styles.buttonBack}
          >
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
};
