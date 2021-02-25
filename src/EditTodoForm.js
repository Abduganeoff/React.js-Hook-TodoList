import React, {useContext} from 'react';
import { TodoContext } from './contexts/todo.context';
import useInputForm from './hooks/useInputForm';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ id, task, setIsEditing }) {
    const [value, handleChange, reset] = useInputForm(task);
    const {dispatch} = useContext(TodoContext);
    return(
        <form onSubmit={ e => {
            e.preventDefault();
            dispatch({ type: "EDIT", id, task: value });
            reset();
            setIsEditing();
        }}
            style={{ marginLeft: '1rem', width: '50%'}}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}
