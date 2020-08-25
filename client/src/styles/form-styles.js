import { makeStyles } from '@material-ui/core/styles';

const useFormStyles = makeStyles((theme) => ({
  root: {
    width: '85%',
    marginTop: '90px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '20px',
    paddingBottom: '20px',

    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },

    [theme.breakpoints.up('md')]: {
      width: '40%',
    },

    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
  },

  form: {},

  textField: {
    marginTop: '10px',
    marginBottom: '10px',
  },

  button: {
    marginTop: '10px',
    marginBottom: '10px',
    textTransform: 'none',
  },
}));

export { useFormStyles };
