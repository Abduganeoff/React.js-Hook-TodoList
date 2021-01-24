import React from 'react'
import useInputForm from './hooks/useInputForm';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


export default function TodoForm({ addTodo }) {
    const [value, handleChange, reset ] = useInputForm('');

    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={ e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField 
                    value={value} 
                    onChange={handleChange} 
                    margin='normal'
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    );
}
