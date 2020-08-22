import React from 'react';
import { Button } from '@material-ui/core';
import { useFormSuccessStyles } from '../styles/form-success-styles';

export const FormSuccess = (props) => {
  const classes = useFormSuccessStyles();

  return (
    <div>
      <h1>Success</h1>
      <Button
        classes={{ contained: classes.button }}
        variant='contained'
        color='primary'
        onClick={() => props.setState('email')}>
        Back
      </Button>
    </div>
  );
};
