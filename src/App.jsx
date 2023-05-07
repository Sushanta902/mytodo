import { useState,useEffect } from 'react'
import People from './components/People'
import Todos from './components/Todos'
import axios  from 'axios'

function App() {


  const apiKey = "645669647213f63d430ce6ca";

  const [fetchData,setFetchData] = useState([''])

  const fetch = async()=>{

    const apidata = axios.get('https://react-workshop-todo.fly.dev/todos/all', {
      headers: {
        apiKey: {apiKey}
      }
    })
  
  setFetchData(apidata);
  };
  useEffect(() => {
    fetch();
  }, []);

  console.log(fetchData)

   

  const hardData = [
    {img:'https://www.blexar.com/avatar.png',id:0,name:'My Todos',task:[{head:'Assignment 1 📝',content:'i want to learn sth😂'}]},
    {img:'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQ2wPmYNixF92zIj_LsxSjjJQ7vO3CdccFkVEdKIvofULXBOwzb-Ef1bYv11mkcW5SJ',id:1,name:'jhon Biden',task:[{head:'learn react',content:'i want to learn react'},
                              {head:'learn npm1',content:'i want to learn pm'}]},
    {img:'https://upload.wikimedia.org/wikipedia/commons/0/01/KP_Oli.png',id:2,name:'Kp Oli',task:[{head:'Book',content:'Plane sufari'},
                              {head:'learn npm2',content:'i want to learn pm'}]},
    {img:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Prachanda_2009.jpg',id:3,name:'PK Dahal',task:[{head:'learn react',content:'i want to learn react'},
                              {head:'learn npm3',content:'i want to learn pm'}]},
    ]
   
    

    const myData = []

    
    const [clicked,setClicked] = useState(hardData[0])

    
    const identify = (e)=>{
      setClicked([''])
      setClicked(hardData[e])
    }
    console.log(clicked)
  return (
    <>
      <div className="container">
        <People identify={identify} hardData={hardData}/>
    
        <Todos  data={clicked}/>
        
      </div>
    </>
  )
}

export default App
