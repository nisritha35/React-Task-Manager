import { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { todosContext } from './contexts/TodosContextProvider';


//function AddToDo(props) ---> if passed from root comp

function AddToDo() {

  //get state from context
  let [todos,addNewTodo] = useContext(todosContext);

  //props => {todos :[],addNewTodo:function }

  let {register, handleSubmit, formState:{errors}}=useForm();

  let formSubmit = (todoObj)=>{
       //console.log(todoObj);  //newTodo = {"xyzabc"}
       //props.addNewTodo(todoObj.newTodo) -->incase of props passed from root comp
       addNewTodo(todoObj.newTodo,1)
  }

  let formSubmit2 = (todoObj)=>{
      
    addNewTodo(todoObj.delTodo,0);
     
  }
  
  return (
    <div>
      <h1>AddToDo</h1>
     <form onSubmit = {handleSubmit(formSubmit)}>
     <div className = "mb-3">
      <label htmlFor = "todo">Enter New Task</label>
      <input type = "text" id = "todo" className = "form-control" {...register("newTodo")} />
     </div>
     <button type = "submit" className = "btn btn-success ">Add</button>
     </form>

     <h1>DeleteToDo</h1>
     <form onSubmit = {handleSubmit(formSubmit2)}>
     <div className = "mb-3">
      <label htmlFor = "todo">Enter Task to be deleted</label>
      <input type = "text" id = "tododel" className = "form-control" {...register("delTodo")}/>
     </div>
     <button type = "submit" className = "btn btn-success ">Delete</button>
     </form>
  
    </div>
    
  )
}

export default AddToDo