import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


export default function TodoList({ todos, deleteTodo, toggleTodo, editTodo}) {
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, idx) => (
                    <>
                        <Todo
                            {...todo}
                            key={todo.id}
                            deleteTodo={deleteTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        {idx < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    )

    return null;
}
