import React, { Component,useState }  from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';
import Comp1 from './Comp1';
import TextField from '@material-ui/core/TextField';
window.arr=[];
export default function Comp()
{
  const [value, setValue] = useState();
  // window.arr=[]
  // const [store,setStore]=useState([]);
  // console.log(window.arr)

  function qwerty(val1)
  {
  	window.arr.push(val1)
  	// console.log(window.arr)
  	  
  	// setStore(preVal=>{return [...preVal,value]})
  	// console.log(store)
  }
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
        <div style={{margin:"3px",marginLeft:"90px"}}>
     <Button variant="outlined" onClick={()=>qwerty(value)} color="secondary" size="large" >
  confirm
</Button>;
</div>
  
  </VerticalTimelineElement>);
}
