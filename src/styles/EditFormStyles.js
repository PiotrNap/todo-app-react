import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  EditForm: {
    width: '80%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input: {
    width: '80%',
    fontSize: '16px',
    fontFamily: 'Nunito',
    border: 'none',
    borderBottom: '2px solid #ccc',
    outline: 'none',
    paddingLeft: '2px',
    paddingBottom: '4px',
    backgroundColor: 'transparent',
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
