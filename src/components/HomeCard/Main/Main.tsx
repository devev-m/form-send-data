import { ButtonNext } from '../../UI/ButtonNext/ButtonNext';
import { Input } from '../../UI/Input/Input';

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <Input
          labelName="Номер телефона"
          type="tel"
          placeholder="+7 999 999-99-99"
          styleClass="home"
        />
        <Input
          labelName="Email"
          type="email"
          placeholder="tim.jennings@example.com"
          styleClass="home"
        />
      </div>
      <ButtonNext>Начать</ButtonNext>
    </div>
  );
};
