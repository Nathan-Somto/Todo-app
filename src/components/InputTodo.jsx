import check from "../images/icon-check.svg";
import { useState } from "react";
function InputTodo({ theme ,addTask }) {
   
    const [text, setText] = useState('');
  const getTodo = (e) => {
    e.preventDefault();
    if (text !== "") {
     addTask(text);
    return;
  };
}
  function handleChange(e)
   {
    setText(e.target.value,);
  }
  return (
    <>
      <form onSubmit={getTodo}>
        <input
          onChange={handleChange}
          className={`input-${theme}`}
          value={text}
          type="text"
          placeholder="Create a new Todo.."
        />
        <input type="submit" />
      </form>
      
    </>
  );
}

export default InputTodo;
