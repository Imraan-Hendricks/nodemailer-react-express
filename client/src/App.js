import React, { useState } from 'react';
import { ButtonAppBar } from './components/app-bar';
import { Form } from './components/form';
import { FormSuccess } from './components/form-success';

const App = () => {
  const [state, setState] = useState('email');

  return (
    <div>
      <ButtonAppBar />
      {state === 'email' && <Form setState={setState} />}
      {state === 'success' && <FormSuccess setState={setState} />}
    </div>
  );
};

export default App;
