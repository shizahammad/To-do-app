import React from 'react'
import './Todo.css'
import {List,ListItem,ListItemText, ListItemAvatar, Button} from '@material-ui/core';
import db from './firebase.js';

function Todo(props) {
    return (
        <div>
            <List className="todo_list">
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.text.text} secondary="dummy deadline" />
                </ListItem>
                <Button onClick={event =>db.collection('todos').doc(props.text.id).delete()}>Delete me</Button>
            </List>
            
        </div>
    )
}

export default Todo

