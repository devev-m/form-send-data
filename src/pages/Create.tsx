import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { FirstCard } from '../components/FirstCard/FirstCard';
import { SecondCard } from '../components/SecondCard/SecondCard';
import { ThirdCard } from '../components/ThirdCard/ThirdCard';

export const Create = () => {
  const [step, setStep] = useState(1);

  const formData = useSelector((state: RootState) => state.formData);

  const handleStepChange = (nextStep: number) => {
    setStep(nextStep);
  };

  return (
    <>
      {step === 1 && (
        <FirstCard
          setStep={handleStepChange}
          formData={formData}
        />
      )}
      {step === 2 && (
        <SecondCard
          setStep={handleStepChange}
          formData={formData}
        />
      )}
      {step === 3 && (
        <ThirdCard
          setStep={handleStepChange}
          formData={formData}
        />
      )}
    </>
  );
};
