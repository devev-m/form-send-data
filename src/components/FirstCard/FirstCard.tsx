import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { FormDataType, Sex, setFormData } from '../../redux/slice';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './FirstCard.module.scss';

const schema = yup.object().shape({
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
  sex: yup.mixed<Sex>().oneOf(Object.values(Sex)).required('Выберите пол'),
});

type FormData = yup.InferType<typeof schema>;

interface IFirstCardProps {
  formData: FormDataType;
  setStep: (arg: number) => void;
}

export const FirstCard: React.FC<IFirstCardProps> = ({ setStep, formData }) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: formData,
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(setFormData(data));
    setStep(2);
  };

  return (
    <div className={styles.inner}>
      <ProgressBar currentStep={1} />

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
            id="field-nickname"
            {...register('nickname', {
              required: true,
            })}
            onBlur={() => {
              trigger('nickname');
            }}
          />
          <span className={styles.error}>{errors.nickname?.message}</span>
        </label>

        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            placeholder="Placeholder"
            id="field-name"
            {...register('name', {
              required: true,
            })}
            onBlur={() => {
              trigger('name');
            }}
          />
          <span className={styles.error}>{errors.name?.message}</span>
        </label>

        <label className={styles.label}>
          Sername
          <input
            className={styles.input}
            type="text"
            placeholder="Placeholder"
            id="field-sername"
            {...register('sername', {
              required: true,
            })}
            onBlur={() => {
              trigger('sername');
            }}
          />
          <span className={styles.error}>{errors.sername?.message}</span>
        </label>

        <label className={styles.label}>
          Sex
          <select
            className={styles.input}
            {...register('sex', {
              required: true,
            })}
          >
            <option
              className={styles.input}
              id="field-sex"
              value=""
            >
              Не выбрано
            </option>
            <option
              className={styles.input}
              id="field-sex-option-man"
            >
              man
            </option>
            <option
              className={styles.input}
              id="field-sex-option-woman"
            >
              woman
            </option>
          </select>
          <span className={styles.error}>{errors.sex?.message}</span>
        </label>

        <div className={styles.buttons}>
          <Link
            className={styles.buttonBack}
            to="/"
            id="button-back"
          >
            Назад
          </Link>

          <button
            className={styles.buttonNext}
            type="submit"
            id="button-next"
          >
            Далее
          </button>
        </div>
      </form>
    </div>
  );
};
