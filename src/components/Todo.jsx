import React from 'react'

export default function Todo({head,content}) {
  return (
    <>

        <div className="todo"> 
            <div className="todoHead">{head} </div>
            <div className="todoContent">{content} </div>
        </div>
    </>
  )
}
