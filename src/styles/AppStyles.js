import { makeStyles } from '@material-ui/core/styles';
import sizes from '../helpers/sizes';

export default makeStyles({
  App: {
    width: '50%',
    margin: '5vh auto 0',
    fontFamily: 'Nunito',
    color: '#202021',
    [sizes.down('md')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '90%',
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
    '& h1': {
      fontSize: '2.6rem',
      fontWeight: '400',
    },
    '& h2': {
      fontSize: '1rem',
      fontWeight: '400',
    },
  },
  span: {
    color: '#4287f5',
    fontWeight: '700',
  },
});
