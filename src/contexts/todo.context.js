import React, { createContext } from 'react';
import reducer from '../reducers/todo.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

export const TodoContext = createContext();
export const DispatchContext = createContext();

const initialTodos = [
        { id: 1, task: 'go to sleep', completed: false },
        { id: 2, task: 'to prepare for interview', completed: true },
        { id: 3, task: 'make a plan for tomorrow', completed: false }
    ];

export function TodoProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', initialTodos, reducer);
    return(
        <TodoContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    );
}


