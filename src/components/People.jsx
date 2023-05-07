import React from 'react'
import Accounts from './Accounts'



export default function People({hardData,identify}) {
  return (
    <>
    <div  className="people">
        <div className="heading"> Accounts </div>
       
          {
            hardData.map((item)=>
            
            <Accounts img={item.img}id={item.id} identify={identify}  key={item.id} name={item.name} />
            )
          }
          
        
        </div>
    <div/>
    </>
  )
}
