import React, { Component,useState }  from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
window.arr=[]
export default function Comp(props){
	
	console.log(props)
	function qwerty(val)
	{
		window.arr.push(val)
		console.log(window.array)
			// setStore(preVal=>{return [...preVal,props.val]})
  	// console.log(sto
 }
	return(
	 <Button variant="outlined" onClick={()=>qwerty(props.val)} color="secondary" size="medium" >
  confirm
</Button>);
}

