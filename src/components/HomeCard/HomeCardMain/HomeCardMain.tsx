import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FormDataType, setFormData } from '../../../redux/slice';
import { AppDispatch, RootState } from '../../../redux/store';

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

type FormData = Pick<FormDataType, 'phone' | 'email'>;

export const HomeCardMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const formData = useSelector((state: RootState) => state.formData);

  const { phone, email } = formData;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(setFormData(data));
    navigate('/create');
  };

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
          {...register('phone')}
          defaultValue={phone}
        />
        <span className={styles.error}>{errors.phone?.message}</span>
      </label>

      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          {...register('email')}
          defaultValue={email}
        />
        <span className={styles.error}>{errors.email?.message}</span>
      </label>

      <button
        className={styles.button}
        type="submit"
        id="button-start"
      >
        Начать
      </button>
    </form>
  );
};
