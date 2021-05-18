import React, {useState, useEffect} from "react";
import './App.css';

// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import todolistIcon from "./image/todolistIcon.png";




function App() {

// state
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    // useEfect
    useEffect(()=> {
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);

// function
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save local
  const saveLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('tods', JSON.stringify([]))
    }else(
      localStorage.setItem('tods',JSON.stringify(todos))
    );
  }

  return (
    <div className="App">
      
      <header>
        <img src={todolistIcon} height={100} width={100} />
        
        <h3> Organise yourself...  <h1> ... make a list! </h1>   </h3>
             
      </header>


      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}  />

    </div>
  );
}

export default App;
