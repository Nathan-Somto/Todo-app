
import TodoItem from "./TodoItem";
function TodosList ({todos,theme,deleteTask})
{
  return(
    <div className="todos">
    {todos &&
      todos.map((todo, index) => {
        return (
          <TodoItem
            theme= {theme}
            item= {todo}
            key={index}
            id =  {index}
            complete={false}
            deleteTask ={deleteTask}
          />
        );
      })}
    <div className= {`desktop options container container-${theme}`}>
      <p>{todos.length} items left</p>

      <div>
        <button className="active">All</button> <button>Active</button>
        <button>Completed</button>{" "}
      </div>
      <button>Clear Completed</button>
    </div>

    <div className= {`mobile top-option container container-${theme} `}>
      <p>{todos.length} items left</p>
      <button>Clear Completed</button>
    </div>
    <div className = {`mobile bottom-option container container-${theme}`}>
      <button>All</button> <button>Active</button>
      <button>Completed</button>{" "}
    </div> 
  </div>
);
  
}
export default TodosList;
