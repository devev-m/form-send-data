import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { StepOne } from './pages/StepOne';
import { StepTwo } from './pages/StepTwo';
import { StepThree } from './pages/StepThree';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="step-one"
        element={<StepOne />}
      />
      <Route
        path="step-two"
        element={<StepTwo />}
      />
      <Route
        path="step-three"
        element={<StepThree />}
      />
    </Routes>
  );
}

export default App;
