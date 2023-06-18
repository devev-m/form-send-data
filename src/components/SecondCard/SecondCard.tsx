import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { FormDataType, setFormData } from '../../redux/slice';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './SecondCard.module.scss';

const schema = yup.object({
  advantages: yup
    .array()
    .of(yup.string().required('Введите значение в поле ввода'))
    .required('Введите хотя бы одно значение в поле ввода'),
  checkbox: yup
    .array()
    .of(yup.number().required('Выберите хотя бы один пункт из чекбокса'))
    .required('Выберите хотя бы один пункт из чекбокса'),
  radio: yup.number().required('Выберите значение для радио'),
});

type FormData = yup.InferType<typeof schema>;

interface ISecondCardProps {
  setStep: (arg: number) => void;
  formData: FormDataType;
}

export const SecondCard: React.FC<ISecondCardProps> = ({ setStep, formData }) => {
  const [inputs, setInputs] = useState(['', '', '']);
  const checkboxes = [1, 2, 3];
  const radioArray = [1, 2, 3];

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index: number) => {
    setInputs((prevInputs) => prevInputs.filter((_, i) => i !== index));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({ resolver: yupResolver(schema), defaultValues: formData });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(setFormData(data));
    setStep(3);
  };

  const handleSubmitBack = () => {
    setStep(1);
    dispatch(setFormData(getValues()));
  };

  return (
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
            {checkboxes.map((elem, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  value={elem}
                  {...register('checkbox', {
                    required: true,
                  })}
                />
                <span className={styles.checkboxImage}></span>
                {elem}
              </label>
            ))}
            {errors.checkbox?.message}
          </div>
          <div className={styles.radioGroup}>
            Radio group
            {radioArray.map((elem, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={elem}
                  {...register('radio', {
                    required: true,
                  })}
                />
                <span className={styles.radioImage}></span>
                {elem}
              </label>
            ))}
            {errors.radio?.message}
          </div>
          <div className={styles.buttons}>
            <button
              onClick={handleSubmitBack}
              className={styles.buttonBack}
              type="button"
            >
              Back
            </button>

            <button
              className={styles.buttonNext}
              type="submit"
            >
              Далее
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
