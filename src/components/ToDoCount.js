import React from 'react'
import {useContext} from 'react';
import { todosContext } from './contexts/TodosContextProvider';
//import Test1 from './Test1';


//function ToDoCount(props) --> if props are passed by the root comp

function ToDoCount() {

  //get state from context
  let [todos,addNewTodo] = useContext(todosContext);

  return (
    <div className = "text-center">
       <h1>ToDo Count</h1> 
       <p className = "display-3 text-danger text-center">{todos.length}</p>
       {/* <Test1 /> */}
    </div>
  )
};

export default ToDoCount;