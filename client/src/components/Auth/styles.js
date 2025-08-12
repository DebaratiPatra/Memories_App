import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  inputsContainer: {
    marginBottom: theme.spacing(2), // ✅ Adds space before button
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginTop: theme.spacing(2),    // gap above Google button
    marginBottom: theme.spacing(2),
  },
}));