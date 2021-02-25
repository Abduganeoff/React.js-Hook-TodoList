import React, {useContext} from 'react';
import { TodoContext } from './contexts/todo.context';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


export default function TodoList() {
    const { todos } = useContext(TodoContext);
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map((todo, idx) => (
                    <>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            task={todo.task}
                            completed={todo.completed}
                        />
                        {idx < todos.length - 1 && <Divider />}
                    </>
                ))}
            </List>
        </Paper>
    )

    return null;
}
