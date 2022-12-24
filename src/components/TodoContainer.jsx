import React from "react";
import InputTodo from "./InputTodo";
import TodoList from "./TodosList";
import { useState } from "react";

function TodoContainer({ theme }) {
  const [Task, setTask] = useState([]);
  function addTask(text) {
   
    setTask(Task.concat(text) );
  }
 function deleteTask(id)
 {
 console.log(id)
 const remainingTask = Task.filter((task,index) => index !== id)
 setTask(remainingTask)
 } 
  return (
    <main>
      <section>
        <InputTodo theme={theme} addTask={addTask} />
        <TodoList theme={theme} todos={Task} deleteTask ={deleteTask}/>
      </section>
    </main>
  );
}
export default TodoContainer;
