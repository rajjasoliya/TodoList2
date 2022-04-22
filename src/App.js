import { useState , useEffect } from "react";
import Header from './Header';
import Tasks from './Tasks';
import Add from './Add';
const App = () => {
  const [show, setShow] = useState(false);
  const [tasks,setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[] )
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
  return data
   }
   //for reminder
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
  return data
   }
const deleteTask = async (getId) => {
  await fetch(`http://localhost:5000/tasks/${getId}`,{
    method:'DELETE',
  })
    setTasks(tasks.filter((val) => val.id !== getId))
    
}
const toggle = async (id) => {
  await fetchTask(id)
    setTasks(tasks.map((val) => val.id === id ? {
      ...val,reminder:!val.reminder
    }:val))
  
}
const addTask = async (task) => {
 const res =  await fetch(`http://localhost:5000/tasks`,{
   method:'POST',
   headers:{
     'Content-type':'application/json',},
     body: JSON.stringify(task)
 })
 const data = await res.json()
 setTasks([...tasks,data])
}
const onEditName = async (getId) => {
  
}
  //  const  id = Math.floor(Math.random() * 10000) + 1
    //  const newTask = { id, ...task }
    //  setTasks([...tasks, newTask])

  return (
    <>
    <Header onAdd={() => setShow(!show)} show={addTask} />
    { show && <Add onAdd={addTask} /> }
    {tasks.length > 0 ? <Tasks data={tasks} onDelete={deleteTask} onToggle={toggle} onEditName={onEditName} /> : <h1 style={{textAlign:'center',color:'green'}}>No Tasks Available</h1>}
    </>
  )
}

export default App
