import { useState } from 'react';
import { handle } from '../utils/utils';

const Form = (inputs, request, onSuccess) => {
  const [data, setData] = useState(inputs);
  const [validation, setValidation] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValidation({});
    setData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async () => {
    const [res, errs] = await handle(request(data));
    if (errs) {
      return errs.forEach((err) => {
        setValidation((state) => ({ ...state, [err.param]: err.msg }));
      });
    }
    if (process.env.NODE_ENV === 'development')
      console.log('nodemailer api response:', res);
    onSuccess();
  };

  const error = (error) => {
    if (error) return true;
    return false;
  };

  return { data, validation, handleOnChange, handleSubmit, error };
};

export default Form;
