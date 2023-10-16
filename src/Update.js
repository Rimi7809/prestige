
import { Component } from "react";

class Update extends Component 
{
    constructor()
    {
        super()
        console.log("constructor")
        this.state=
        {
            name:"Ridhima"
        }
    }
    componentDidUpdate()
{
    console.log("Component Did Update")
}
render()
{
    console.log("render")
    return(
        <div>
            <h1>My name is {this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Ridhi"})}>Submit</button>
        </div>
    )
}
}


   

    export default Update