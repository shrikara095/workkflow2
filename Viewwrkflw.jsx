import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Selectors from './Selectors';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ViewFiles from './ViewFiles';
import FormLabel from '@material-ui/core/FormLabel';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '62ch',
    },
  },
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '30ch',
  },
  divide:{
      marginBottom:'10px',
  },
  flabel:{
    marginTop:'20px',
  }
}));


export default function Viewwrkflw() {
  const classes = useStyles();
 
  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
      <Typography variant="h5" component="h2">
            workflow1
        </Typography>
        
       <Divider className={classes.divide}/>
       <ViewFiles />
       <FormLabel component="legend" className={classes.flabel}>add activities</FormLabel>
       <TextField
          id="outlined-multiline-static"
          label="send mail"
          multiline
          rows={4}
          
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="add note"
          multiline
          rows={4}
          
          variant="outlined"
        />
       
        <Selectors />
        
      
        
      </div>
    </form>
  );
}