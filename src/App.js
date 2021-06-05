import  React, { useState } from 'react';
import shortid from 'shortid';

function App() {
  const [ task, setTask ] = useState("");
  const [ tasks, setTasks ] = useState([])
  const addTask = (e) => {
    e.preventDefault();
    if(task !== ""){
      
      const newTask = {
        id: shortid.generate(),
        name:task
      }
      
      setTasks([...tasks, newTask]);

      setTask("");

    }else{
      alert('Ingrese un nombre de tarea')
    }
  }

  return (
   <div className="container mt-5">
    <h1>Tareas</h1>
    <hr/>
    <div className="">
      <div className="row"  >
        <div className="col-8"> 
          <h4 className="text-center">Lista de tarea</h4>
          <ul className="list-group">
            {              
              tasks.map((task, index) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button className="btn btn-danger btn-sm float-end mx-2" id={index} >Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4"> 
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}> 
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea"
              onChange={(text) => setTask(text.target.value)}
              value={task} />
              <div className="d-grid gap-2">
                <button 
                  type="submit" 
                  className="btn btn-dark btn-block">Agregar</button>
              </div>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
} 

export default App;
