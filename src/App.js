import ToDoList from './components/ToDoList';
import ToDoCount from './components/ToDoCount';
import AddToDo from './components/AddToDo';

function App(){

  //state needs to be transferred to its children
  //let [todos,setTodos] = useState([]);
  // let addNewTodo = (todo) => {
  //  setTodos([...todos, todo])
  //  }
  //console.log(todos);

  return (

    <div className = "justify-content-center container m-3 p-5 border">
      <h1 className = "d-flex justify-content-center mb-5">TASK MANAGER</h1>
        <div className = "row">
         
         {/*passing the state and function to change the state to the child */}

         <div className = "col-sm-4 text-info ">
          {/*<AddToDo todos = {todos} addNewTodo = {addNewTodo} />*/}
          <AddToDo />
          </div>
         <div className = "col-sm-4 text-info ">
          {/* <ToDoList {/* todos = {todos}  /> */}
          <ToDoList />
          </div>
         <div className = "col-sm-4 text-info ">
          {/*<ToDoCount  todos = {todos} /> */}
          <ToDoCount />
          </div>
        

        </div>
    </div>
  );
}

export default App;
