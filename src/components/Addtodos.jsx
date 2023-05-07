import React, { useState,useEffect } from 'react'

export default function Addtodos({data,update}) {

    const  [fieldData,setFieldData] = useState('')
    
    const pushData = ()=>{
        const datavalue = fieldData.split(':');
       
        data.task.push({head:datavalue[0],content:datavalue[1]})
        update(data);
        
        
    }

   

   
  return (
    <>
    <div className="input-container">
    <input type="text" onChange={(e)=>(setFieldData(e.target.value))} className="input-field" placeholder=" e.g. Title:task" />
    <button className="add-button" onClick={()=>(pushData())} >Add</button>
  </div>
    </>
  )
}
