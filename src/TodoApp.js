import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoProvider } from './contexts/todo.context';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


export default function TodoApp() {

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color="primary" position='static' style={{ height: "64px"}}>
                <Toolbar>
                    <Typography color="inherit">Todo lists here</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoProvider>
                        <TodoForm />
                        <TodoList />
                    </TodoProvider>
                </Grid>
            </Grid>
        </Paper>
    )
}
