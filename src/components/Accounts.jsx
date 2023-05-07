import React from 'react'

export default function Accounts({id,name,identify,img}) {
  return (
    <>
            <div value={id} className="accounts">
              <img  src={img} />
              <div className="detail">
                  <div className="name">{name}</div>
              </div>
                  <div onClick={(e)=>(identify(id))} className='show' >➡️</div>
            </div>
    </>
  )
}
