import { makeStyles } from '@mui/styles';

export default makeStyles({
  media: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    maxWidth: 400,
    overflow: 'visible', 
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    zIndex: 10, 
  },
overlay2: {
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 10,
  backgroundColor: 'rgba(0,0,0,0.3)',  
  borderRadius: '50%',
  padding: 2,
},
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    wordBreak: 'break-word', 
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    '& .MuiButton-root': {
      margin: '0 4px', 
    }
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  grid: {
    display: 'flex',
  },
});