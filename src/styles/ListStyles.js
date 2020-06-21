import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  ListStyles: {
    listStyle: 'none',
    margin: '0 auto',
    '& li': {
      width: '100%',
      padding: '.8rem .5rem',
      color: '#202021',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.2s ease-out',
      '&:hover': {
        background: '#e3e1e1',
        cursor: 'pointer',
      },
    },
  },
});
