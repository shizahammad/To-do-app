import React, {useState} from 'react'
import './Todo.css'
import {List,ListItem,ListItemText, ListItemAvatar,  Modal, Button} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes= useStyles();
    const [open, setOpen] = useState(false);
    const [input,setinput] = useState('')
  const handleOpen = () => {
    setOpen(true);
  };
 const updateTodo =() => {
     db.collection('todos').doc(props.text.id).set({
        text: input
     },{merge:true})
    setOpen(false);
 }
    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false) }
            >
                <div className={classes.paper}>
                    <h1>Modal opened
                    </h1>
                    <input placeholder={props.text.text} value={input} onChange={event => setinput(event.target.value)}/>
                    <Button onClick={updateTodo}>Update to-do</Button>
                </div>
            </Modal>
            <List className="todo_list">
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.text.text} secondary="dummy deadline" />
                </ListItem>
                <button onClick={e =>setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event =>db.collection('todos').doc(props.text.id).delete()}/>
            </List>
            
        </div>
    )
}

export default Todo

