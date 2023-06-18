import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { FormDataType, setFormData } from '../../redux/slice';
import { usePostFormDataMutation } from '../../redux/api';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Modal } from '../Modal/Modal';

import styles from './ThirdCard.module.scss';

interface IThirdCardProps {
  setStep: (arg: number) => void;
  formData: FormDataType;
}

export const ThirdCard: React.FC<IThirdCardProps> = ({ setStep, formData }) => {
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [postForm, { isSuccess }] = usePostFormDataMutation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({ defaultValues: formData });

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    dispatch(setFormData(data));
    postForm(data)
      .then(() => {
        setIsModalVisible(true);
      })
      .catch(() => {
        setIsModalVisible(true);
      });
  };

  const handleSubmitBack = () => {
    setStep(2);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalVisible(false);
  };

  return (
    <div className={styles.thirdCard}>
      {isModalVisible && (
        <Modal
          success={isSuccess}
          closeModal={(e) => closeModal(e)}
        />
      )}
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
              {...register('about', { required: true, maxLength: 200 })}
              onChange={handleChange}
            />
            <span className={styles.counter}>{text.replace(/\s/g, '').length}</span>
          </label>
          {errors.about?.type === 'required' && (
            <p className={styles.error}>Поле обязательно для заполнения</p>
          )}
          {errors.about?.type === 'maxLength' && (
            <p className={styles.error}>Превышено максимальное количество символов</p>
          )}

          <div className={styles.buttons}>
            <button
              onClick={handleSubmitBack}
              type="button"
              className={styles.buttonBack}
            >
              Назад
            </button>

            <button
              className={styles.buttonNext}
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
