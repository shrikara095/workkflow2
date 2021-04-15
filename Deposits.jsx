import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Title from './Title';
import CardContent from '@material-ui/core/CardContent';
import AnalogClock from 'analog-clock-react';
import Card from '@material-ui/core/Card';
function preventDefault(event) {
  event.preventDefault();
}
// let options = {
//     width: "180px",
//     border: true,
    
//     borderColor: 'rebeccapurple',
//      baseColor: 	'#E8E8E8',
//     centerColor: "#459cff",
//     handColors: {
//       second: "#d81c7a",
//       minute: "#17a2b8",
//       hour: "#17a2b8"
//     }
// };
let options = {
    width: "180px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    handColors: {
      second: "#d81c7a",
      minute: "#fff",
      hour: "#fff"
    }
};

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  title:{
      marginBottom:'40px',
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Title >current time</Title>
      
      {/* <Typography component="p" variant="h4">
        $3,024.00
      </Typography> */}
      <Card><CardContent><AnalogClock {...options} className={classes.title}/></CardContent></Card>
      
      <div>
       
        {/* <Link color="primary" href="#" onClick={preventDefault} >
          set time
        </Link> */}
      
      </div>
    </React.Fragment>
  );
}
