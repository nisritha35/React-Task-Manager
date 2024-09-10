import { createContext, useState } from 'react';


//create context - named export - global state
export let todosContext = createContext();

//create context provider
function TodosContextProvider({ children }){

    //state
    let [todos, setTodos] = useState([]);

    //function to add new ToDo
    let addNewTodo = (todo,add) => {
    if(add==1) setTodos([...todos, todo]);
    else{
        let idx = todos.findIndex((element)=>element==todo);
        if(idx==-1){
            console.log("Task is not present");
        } 
        else
        {todos.splice(idx,1);
        setTodos([...todos]);
        }
    }
   }

    return (
        <todosContext.Provider value ={[todos,addNewTodo]}>
            {children}
        </todosContext.Provider>
    );
}
export default TodosContextProvider;