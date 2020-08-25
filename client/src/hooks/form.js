import { useState } from 'react';
import { handle } from '../utils/utils';

const Form = (inputs, request, onSuccess) => {
  const [data, setData] = useState(inputs);
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({});

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValidation({});
    setData((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const [res, errs] = await handle(request(data));
    if (errs) {
      errs.forEach((err) => {
        setValidation((state) => ({ ...state, [err.param]: err.msg }));
      });
      return setLoading(false);
    }
    if (process.env.NODE_ENV === 'development')
      console.log('nodemailer api response:', res);
    onSuccess();
    setLoading(false);
  };

  const error = (error) => {
    if (error) return true;
    return false;
  };

  return { data, loading, validation, handleOnChange, handleSubmit, error };
};

export default Form;
