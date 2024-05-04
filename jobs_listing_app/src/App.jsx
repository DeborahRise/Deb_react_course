// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { Planet } from './compPlanet';

// conditional rendering with teneary ops
// exporting from a different component file, while doing a task on
// conditional rendering with listsand objects/dicts and tenary ops

function App() {
  const [todoList, setTodoList] = useState([]);
  const [new_entry, setNew_entry] = useState("");

  const Take_New_Entry = (event) => {
    setNew_entry(event.target.value);
  };
  const add_task = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: new_entry,
      done: false
    };
    setTodoList([...todoList, task]);
    setNew_entry("");
  };
  const X = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id ));
  };
  const done = (id) => {
   
    setTodoList(
      todoList.map((task) => 
      task.id === id ? { ...task, done: true  } : task))

  }
  return (
  <div className="App">
    <div> <h1> TO DO LIST APP</h1></div>
    <div className='add_task'>
      <button onClick={add_task}> ADD TASK</button>
      <input value={new_entry} onChange={Take_New_Entry} />
    </div>
    <div className='task_list'>
      {todoList.map((task) => {
        return <div>
        <p style={task.done ? {backgroundColor: "green"} : {}}> 
        <button onClick={ () => X(task.id)}>x</button>
        {task.taskName} 
        <button onClick={ () => done(task.id)}> done</button>
        </p>
        
        
        </div>
      })}
    </div>
  </div> 
  );
};
export default App
