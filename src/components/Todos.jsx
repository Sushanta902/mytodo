import {useState,useEffect} from 'react'
import Todo from './Todo'
import Addtodos from './Addtodos'
export default function Todos({data}) {
  
  const [fetchData,setFetchData] = useState(data)
  const update = (mynewdata) =>{  
    console.log(mynewdata)
    setFetchData(mynewdata);
   }
  
   useEffect(() => {
     update(fetchData)
   }, [])
   

  
 
 console.log(fetchData)
 console.log(data)

  
  var newmydata = (data.id == 0 )? fetchData :data





  return (
    <>
    
    <div className="todos">
      <img className='ava' src={data.img}  />
      <div className='makeInline'>
      <h1>{data.name}</h1>
      {
      data.id == 0 ? <Addtodos update={update} data={data}/> :' '
    }
    </div>
        {
         
          newmydata.task.slice(0).reverse().map((items)=>

          <Todo head={items.head} key={items.head} content={items.content} />
          )
        }



    </div>

    </>
  )
}
