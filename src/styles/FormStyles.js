import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  FormStyles: {
    width: '100%',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    fontSize: '1.2rem',
    border: 'none',
    borderBottom: '2px solid #ccc',
    outline: 'none',
    paddingLeft: '2px',
    paddingBottom: '4px',
    fontFamily: 'Nunito',
    transition: 'border-bottom 0.2s ease',
    '&:focus': {
      borderBottom: '2px solid #4287f5',
      outline: 'none',
    },
    '& input[type="text"]': {
      transform: 'translateY(-25px)',
    },
  },
});
