import { Card, Checkbox, Grid, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import "../component/todos.css";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {  
  const todoList = todos.length ? (
    todos.map((todo) => {
      let todoDate = new Date(todo.duedate);
      let date = new Date();
      let color = "white";
      if(parseInt(date.getFullYear()) > parseInt(todoDate.getFullYear()) || 
      parseInt(date.getMonth()) > parseInt(todoDate.getMonth()) ||
      parseInt(date.getDate()) > parseInt(todoDate.getDate())) {
        color = "#FF5B61";
      }
      return (
        <Grid key={todo.id}>
          <Card style={{marginTop:5, background:color}} data-testid={todo.content}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
              <ListItemButton component="a" href="#simple-list">
                <Checkbox style={{paddingLeft:0}} color={'primary'} onClick={() => deleteTodo(todo.id)}/>
                <ListItemText primary={todo.content} secondary={'Due: '  + (todoDate.getMonth() < 9 ? "0" : "") + (parseInt(todoDate.getMonth()) + 1)
                 + "/" + (todoDate.getDate() < 10 ? "0" : "") + todoDate.getDate() + "/" + todoDate.getFullYear()
                }/>
              </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
