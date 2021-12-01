import React, {useState} from 'react'

let  Counter = ()=> {
    let [message, setMessage] = useState()
    let incrCounter = ()=>{
        setMessage("Hello, GM")
    }
    return (
        <div>
            <h1>Counter{message}</h1>
            <button onClick={incrCounter}>Incr</button>
        </div>
    )
}

export default Counter
