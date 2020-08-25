import React from 'react';
import {
  Button,
  CircularProgress,
  TextField,
  FormHelperText,
  Paper,
} from '@material-ui/core';
import { contactUs } from '../api/api-nodemailer';
import { useFormStyles } from '../styles/form-styles';
import useForm from '../hooks/form';

export const Form = (props) => {
  const {
    data,
    loading,
    validation,
    handleOnChange,
    handleSubmit,
    error,
  } = useForm(
    {
      firstName: '',
      lastName: '',
      contact: '',
      email: '',
      message: '',
    },
    contactUs,
    () => props.setState('success')
  );

  const classes = useFormStyles();
  return (
    <Paper elevation={3} className={classes.root}>
      <h1>Contact Us</h1>
      <form className={classes.form} noValidate autoComplete='off'>
        <TextField
          fullWidth
          name={'firstName'}
          classes={{
            root: classes.textField,
          }}
          label={'First Name'}
          placeholder={'enter first name'}
          error={error(validation.firstName)}
          helperText={validation.firstName}
          onChange={(e) => handleOnChange(e)}
          value={data.firstName}
        />
        <TextField
          fullWidth
          name={'lastName'}
          classes={{ root: classes.textField }}
          label={'Last Name'}
          placeholder={'enter last name'}
          error={error(validation.lastName)}
          helperText={validation.lastName}
          onChange={(e) => handleOnChange(e)}
          value={data.lastName}
        />
        <TextField
          fullWidth
          name={'contact'}
          classes={{
            root: classes.textField,
          }}
          label={'Contact'}
          placeholder={'enter contact'}
          error={error(validation.contact)}
          helperText={validation.contact}
          onChange={(e) => handleOnChange(e)}
          value={data.contact}
        />
        <TextField
          fullWidth
          name={'email'}
          classes={{ root: classes.textField }}
          label={'Email'}
          placeholder={'enter email'}
          error={error(validation.email)}
          helperText={validation.email}
          onChange={(e) => handleOnChange(e)}
          value={data.email}
        />
        <TextField
          fullWidth
          multiline
          rows={6}
          name={'message'}
          classes={{ root: classes.textField }}
          label={'Message'}
          placeholder={'enter message'}
          error={error(validation.message)}
          helperText={validation.message}
          onChange={(e) => handleOnChange(e)}
          value={data.message}
        />
        {error(validation.general) && (
          <FormHelperText error>{validation.general}</FormHelperText>
        )}
      </form>
      {!loading && (
        <Button
          classes={{ contained: classes.button }}
          variant='contained'
          color='primary'
          onClick={handleSubmit}>
          Send
        </Button>
      )}
      {loading && (
        <CircularProgress
          classes={{ root: classes.circularProgress }}
          color='primary'
        />
      )}
    </Paper>
  );
};
