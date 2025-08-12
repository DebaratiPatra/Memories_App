import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles((theme) => ({

appBar: {
  borderRadius: 15,
  margin: '30px 0',
  padding: '10px 50px',
  display: 'flex',
  flexDirection: 'row',        // children in one row
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',          // prevent wrapping to next line
},

brandContainer: {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
},

heading: {
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
},

image: {
  marginLeft: '10px',
},

toolbar: {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
},

profile: {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
},

userName: {
  display: 'flex',
  alignItems: 'center',
},

purple: {
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
},




  // appBar: {
  //   borderRadius: 15,
  //   margin: '30px 0',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: '10px 50px',
  // },
  // heading: {
  //   color: 'rgba(0,183,255, 1)',
  //   textDecoration: 'none',
  // },
  // image: {
  //   marginLeft: '15px',
  // },
  // toolbar: {
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   width: 'auto',
  //   alignItems: 'center',
  // },
  // profile: {
  //  display: 'flex',
  // justifyContent: 'flex-end', // keep items right-aligned
  // alignItems: 'center',
  // gap: '10px', 
  // },
  // userName: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  // brandContainer: {
  //    display: 'flex',
  // alignItems: 'center',
  // flexGrow: 1, 
  // },
  // purple: {
  //   color: theme.palette.getContrastText(deepPurple[500]),
  //   backgroundColor: deepPurple[500],
  // },
}));
