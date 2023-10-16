import { useEffect } from "react"
import { useState } from "react"

function Hook()
{
    useEffect(() => {
        console.log("LOADING.....")

    })
    const[name, setName] = useState("Ninina")
    return (<div>

        <h1>Hello</h1>
         </div>)
}
export default Hook