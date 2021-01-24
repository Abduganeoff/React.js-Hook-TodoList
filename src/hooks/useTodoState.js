import useLocalStorageState from './useLocalStorageState';
const { v4: uuidv4 } = require('uuid');


function useTodoState(initialTodos) {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

   return {
        todos,
       addTodo: newTodoText => {
           setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
       },

       deleteTodo: id => {
           const newTodos = todos.filter(todo => todo.id !== id);
           setTodos(newTodos);
       },
       toggleTodo: id => {
           const updatedTodos = todos.map(todo =>
               todo.id === id ? { ...todo, completed: !todo.completed } : todo
           );
           setTodos(updatedTodos);
       },
       editTodo: (id, newTask) => {
           const updatedTodos = todos.map(todo =>
               todo.id === id ? { ...todo, task: newTask } : todo
           );
           setTodos(updatedTodos);
       }
   } 

}

export default useTodoState;
