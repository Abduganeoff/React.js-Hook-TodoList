import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodoContext = createContext();

const initialTodos = [
        { id: 1, task: 'go to sleep', completed: false },
        { id: 2, task: 'to prepare for interview', completed: true },
        { id: 3, task: 'make a plan for tomorrow', completed: false }
    ];

export function TodoProvider(props) {
    const todos = useTodoState(initialTodos);
    return(
        <TodoContext.Provider value={todos}>
            {props.children}
        </TodoContext.Provider>
    );
}


