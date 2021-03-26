
import React, { useState } from "react"
import check from "../img/check.svg"
import checked from "../img/checked.svg"
//el proyecto en si es una constante (TodoList) que tiene varias funciones, metodos y codigo xml para mostrar por pantalla 
const TodoList = () => {
  const [todos, setTodos] = useState([ { id: 123, checked: false, title: 'Estudiar Javascript' } ]) // por defecto este sera el valor cuando se recargue la pagina
  const [todoValue, setTodoValue] = useState('')  // se iniciaiza como vacio

  const addTodo = (e) => { 
    // e se refiere a event, preguntar o investigar por que el parametro es event 
    e.preventDefault() // esta linea sirve para no recargar la página 
    const newTodo = { title: todoValue, checked: false, id: Math.floor(Math.random() * 100) + 1 };
    setTodos((prevState) => [...prevState, newTodo]) // copia y pega el anterior dato para mostrarlo en pantalla y le agrega el nuevo ToDo, en esta linea se relacionan todos y todoValue, porque el metodo add todo tiene como valor todoValue y en esta linea se le asigna el metodo de todos (setTodos)
    setTodoValue('') //una vez que se ingreso el dato el input aparecera vacio otra vez con esta linea 
  }

  const removeTodo = (todoId) => {
    const newTodos = todos.filter( (todo) => todo.id !== todoId) //filtra los datos diferentes del todo seleccionado, es decir todos menos el seleccionado, es decir el todo.id es el que desaparecerá, el todoId es como una referencia 
    setTodos(newTodos) // se le asigna al metodo de todos de la linea 7 el newTodos
  }

  const checkTodo = (todoId) => { // se envia el id 
    // el todoId es una referencia para filtrar todos los datos exceptuando el objeto todo.id o checkear por el id que se selecciona 
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) { //si el todo.id es igual al que se selecciona 
        return {
          //se crean nuevos datos como objetos con los todos ya existentes y se les asigna un nuevo valor 
          title: todo.title,
          checked: !todo.checked,   //esta linea de codigo hace que funcione el check, en la linea 52 se le asigna onClick a esta funcion o metodo, lo que hace es que cambia con lo contrario al valor de checked al hacer click 
          id: todo.id
        }
      }
      return todo
    })
    setTodos(newTodos) //se le asigna newTodos a todos por el metodo setTodos, preguntar para que se hace eso porque solamente se chequea el to Do
  }

  return <div className="App">
    <h1>Todos List</h1>
    <br /><br />
    <form onSubmit={addTodo}> 
      <input value={todoValue} onChange={ (e) => setTodoValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>

    {
      todos.map( (todo, i) => {
        return <div key={todo.id} className="list-todo">
          <h3>{ todo.title }</h3>
          { todo.checked }
          <span className="checked-todo" onClick={() => checkTodo(todo.id)}>
            <img src={todo.checked ? checked : check} alt="check" /> 

          </span>
          <span className="remove-todo" onClick={() => removeTodo(todo.id)}>x</span>  
        </div>
      })
    }
</div>
}

export default TodoList
