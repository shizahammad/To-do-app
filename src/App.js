import React ,{useState,useEffect} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase.js';
import firebase from "firebase";
function App() {
  const [todos,settodo] = useState([]);
  const [input,setinput] = useState('')
  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      settodo(snapshot.docs.map(doc => ({id:doc.id, text: doc.data().text})))
    })
  },[])
  const addTodo =(event) => {
    //this will fire when button is clicked
    event.preventDefault(); // will stop page from refreshing on button click or entering
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      
    })
     setinput(""); // to clear up the input after button clicked
  }
  return (
    <div className="App">
      <form>
        {/* <input value ={input} onChange={event => setinput(event.target.value) }/> */}
      {/* <button type="submit" onClick={addTodo}>Add to-do </button> */}
       
      <FormControl>
        <InputLabel >Write a to-do</InputLabel>
        <Input  value ={input} onChange={event => setinput(event.target.value) }/>
      </FormControl>
      <Button disabled={!input} type="submit" variant="contained" onClick={addTodo} color="primary"> Add to-do</Button>
      </form>
      <ul>
       { todos.map(todo => (
         <Todo text={todo}/>
         // <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
