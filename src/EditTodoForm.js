import React from 'react';
import useInputForm from './hooks/useInputForm';
import TextField from '@material-ui/core/TextField';

export default function EditTodoForm({ id, task, setIsEditing, editTodo }) {
    const [value, handleChange, reset] = useInputForm(task);
    return(
        <form onSubmit={ e => {
            e.preventDefault();
            editTodo(id, value);
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
