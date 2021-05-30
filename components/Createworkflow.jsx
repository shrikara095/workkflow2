import React, { Component,useState }  from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Comp from './Comp';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    Button1:{
            marginLeft: "586px",
    },
    Button2:{
      marginLeft:"0",
    }
}));

export default function createworkflow() {
  const classes = useStyles();
 

function comp()
{
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="step1"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<CreateIcon />}
  >
    
     <h2 className="vertical-timeline-element-title">assignee</h2>
   <TextField
          id="outlined-multiline-flexible"
          label="name"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
  
  </VerticalTimelineElement>);
}

  const [add,setAdd]=useState([]);
  function addplus(){
    setAdd(prevAdd =>{
      return [...prevAdd,<Comp />]
    })

  }
 


  return(

    <div>
    <VerticalTimeline>
    {add}
    </VerticalTimeline>
  
    

 <Button variant="outlined" onClick={()=>addplus()} color="secondary" size="large" className={classes.Button2}>
  add step
</Button>
 <Button variant="outlined" color="secondary" onClick={(e)=>submitflow(e)}  size="large" className={classes.Button1} >
  submit
</Button>
</div>

);

}
function submitflow(e){
  e.preventDefault();
  
  let users={
    names:window.arr,
      };
  console.log(users.names)
  
  axios.post('http://localhost:8080/createworkflow',users)
  .then((res) => {
    console.log(res.data);
   }).catch((error) => {
    console.log(error)
});
}
