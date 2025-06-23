import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




export default function Todolist(){
    let [todos , settodos] = useState([{task: "sample todo" , id: uuidv4() , isdone: false}]) 

    let [newtodo , setnewtodo] = useState([]);

    let addnewtask = () =>{
         settodos((prevtodo) =>{
            return [...prevtodo , { task:newtodo , id:uuidv4() , isdone: false}]
         }) 
          setnewtodo("");
         };
         
        
      let updatetodovalues = (event) =>{
        setnewtodo(event.target.value);
      }

      let deletetodo = (id) =>{
        settodos(todos.filter((todo) =>todo.id != id))
      };

      let markAsDone = (id) => {
  settodos((prevtodo) =>
    prevtodo.map((todo) =>
      todo.id === id ? { ...todo, isdone: true } : todo
    )
  );
};
;

      
    return(
        <div>
            <h1>TODO LIST</h1>
            <input placeholder="add task"
             value={newtodo}
             onChange={updatetodovalues}></input>
            <button onClick={addnewtask}>ADD TASK</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
             
             <h3>Tasks TODO</h3>
             <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            <span style={todo.isdone ? { textDecorationline : "linethrough" } : {}}>

                            {" "}
                            {todo.task}
                            </span>
                            
                            &nbsp; &nbsp;
                             <button onClick={ () => deletetodo(todo.id)}>DELETE</button>
                            <button onClick={() => markAsDone(todo.id)} disabled={todo.isdone}> Mark As Done</button>

                            </li>
                    ))
                }
             </ul>
        </div>
    );
   
}