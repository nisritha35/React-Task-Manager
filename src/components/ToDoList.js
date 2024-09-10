import {BiBox} from 'react-icons/bi'
import {useContext} from 'react';
import { todosContext } from './contexts/TodosContextProvider';


//function ToDoList(props)--> when props are passed by the root comp

function ToDoList() {

  //get state from context
  let [todos,addNewTodo] = useContext(todosContext);

  return (
    <div className = 'text-center'>
       <h1>ToDo List</h1> 
       {(todos.length == 0) && (<p className = "display-3 text-warning"><BiBox /></p>) }
       {
        todos.map((task,index)=><h3 key ={index} className = "text-primary">
            {task}
        </h3>)
       }
    </div>
  )
}

export default ToDoList;