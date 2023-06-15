import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './SecondCard.module.scss';

const schema = yup.object().shape({
  advantages: yup
    .array()
    .of(yup.string().required('Введите значение в поле ввода'))
    .required('Введите хотя бы одно значение в поле ввода'),
  checkbox: yup.array().of(yup.number()).required('Выберите хотя бы один пункт из чекбокса'),
  radio: yup.number().required('Выберите значение для радио'),
});

type FormData = yup.InferType<typeof schema>;

export const SecondCard = () => {
  const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className={styles.secondCard}>
      <div className={styles.inner}>
        <ProgressBar currentStep={2} />

        <div className={styles.formWrapper}>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
          >
            Advantages
            <div className={styles.advantages}>
              {inputs.map((value, index) => (
                <div
                  className={styles.advantage}
                  key={index}
                >
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Placeholder"
                    {...register(`advantages.${index}`, {
                      required: true,
                    })}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button
                    className={styles.buttonDelete}
                    onClick={() => handleRemoveInput(index)}
                  >
                    <img
                      src="/delete.svg"
                      alt="delete-icon"
                    />
                  </button>
                </div>
              ))}
              {errors.advantages?.message}
            </div>
            <button
              className={`${styles.buttonBack} ${styles.buttonAdd}`}
              onClick={handleAddInput}
            />
            <div className={styles.checkboxGroup}>
              Checkbox group
              <label>
                <input
                  type="checkbox"
                  value={1}
                  {...register('checkbox', {
                    required: true,
                  })}
                />
                <span className={styles.checkboxImage}></span>1
              </label>
              <label>
                <input
                  type="checkbox"
                  value={2}
                  {...register('checkbox', {
                    required: true,
                  })}
                />
                <span className={styles.checkboxImage}></span>2
              </label>
              <label>
                <input
                  type="checkbox"
                  value={3}
                  {...register('checkbox', {
                    required: true,
                  })}
                />
                <span className={styles.checkboxImage}></span>3
              </label>
              {errors.checkbox?.message}
            </div>
            <div className={styles.radioGroup}>
              Radio group
              <label>
                <input
                  type="radio"
                  value={1}
                  {...register('radio', {
                    required: true,
                  })}
                />
                <span className={styles.radioImage}></span>1
              </label>
              <label>
                <input
                  type="radio"
                  value={2}
                  {...register('radio', {
                    required: true,
                  })}
                />
                <span className={styles.radioImage}></span>2
              </label>
              <label>
                <input
                  type="radio"
                  value={3}
                  {...register('radio', {
                    required: true,
                  })}
                />
                <span className={styles.radioImage}></span>3
              </label>
              {errors.radio?.message}
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
