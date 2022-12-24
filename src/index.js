import React ,{useState} from"react"
import ReactDom from"react-dom";

import App from "./App.js";
import './index.css';

/* import TodoContainer from "./components/TodoContainer" */
/* const element =<h1>Hello from Create React App</h1>
class Counter extends React.Component{
    state={
        counter:0
    }
    decrement =() =>{this.setState({counter:this.state.counter-1});}
    increment =() =>{this.setState({counter:this.state.counter+1});}
    componentDidMount(){
        this.setState({counter:Math.ceil(Math.random()*10 +5)})
    }
render(){
    return <div>
        <p>{this.state.counter}</p>
        <button onClick ={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
    </div>
}

}
function Hello(){
    const[name,setName]=useState("Somto");
    return<h1>Hello {name}.</h1>;
}
function FunctionCounter(){
    const[counter,setCounter]=useState(0);
    function increment(){
        setCounter(counter+1);
    }
    function decrement(){
        setCounter(counter-1);
    }
    return <div>
    <p>{counter}</p>
    <button onClick ={decrement}>Decrement</button>
    <button onClick={increment}>Increment</button>
</div>
} */

ReactDom.render(<App/>,document.getElementById("root"));
/* ReactDom.render(<React.StrictMode><TodoContainer/></React.StrictMode>,document.getElementById("root")) */