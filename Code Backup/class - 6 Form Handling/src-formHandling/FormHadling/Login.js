import React, { Component } from 'react'

class Login extends Component {
    state = {
        email:"",
        password:""
    }
    updateHandler = (event)=>{
        this.setState({
            [event.target.name] : event.target.value

        })
    }
    submitHanlder = (event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <>
    <form onSubmit={this.submitHanlder}>
        <label>Email </label>
        <input type="text" placeholder="Email Id" onChange={this.updateHandler} name="email"/> <br/><br/>

        <label>Password </label>
        <input type="text" placeholder="Please Enter Password Id" onChange={this.updateHandler} name="password" /> <br/><br/>
        <input type="submit" value="Login..."/>
        </form>  

        <hr/>
        <pre>{JSON.stringify(this.state)}</pre>  
            </>
        )
    }
}

export default Login
