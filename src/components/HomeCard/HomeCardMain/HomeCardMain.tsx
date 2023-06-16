import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './HomeCardMain.module.scss';

const schema = yup.object({
  phone: yup
    .string()
    .required('Введите номер телефона')
    .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Неверный формат номера телефона'),
  email: yup
    .string()
    .email('Неверный формат email')
    .required('Введите Email')
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Неверный формат email'),
});

interface IFormData {
  phone: string;
  email: string;
}

export const HomeCardMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className={styles.label}>
        Номер телефона
        <InputMask
          className={styles.input}
          mask="+7 (999) 999-99-99"
          maskChar="_"
          placeholder="+7 999 999-99-99"
          {...register('phone')}
        />
        <span className={styles.error}>{errors.phone?.message}</span>
      </label>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          placeholder="mashkovtsevea@gmail.com"
          {...register('email')}
        />
        <span className={styles.error}>{errors.email?.message}</span>
      </label>

      <button
        className={styles.button}
        type="submit"
      >
        Начать
      </button>
    </form>
  );
};
