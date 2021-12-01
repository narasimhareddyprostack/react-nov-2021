import React, { Component } from 'react'
import Login from './FormHadling/Login'
import Counter from './FormHadling/Counter'
 class App extends Component {
    render() {
        return (
            <div>
               <h1>Login Page</h1> 
             {/*   <Login/> */}
               <hr/>
               <Counter/>
            </div>
        )
    }
}

export default App
