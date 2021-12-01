import React, { Component } from 'react'

class Login extends Component {
    state = {
        email:"",
        password:""
    }
    emailHanlder = (event)=>{
       /*  console.log(event);
        console.log(event.target);
        console.log(event.target.value) */
        this.setState({ email:event.target.value})
    }
    passwordHandler = (event)=>{
        this.setState({password:event.target.value})
    }
    render() {
        return (
            <>
    <form>
        <label>Email </label>
        <input type="text" placeholder="Email Id" onChange={this.emailHanlder} /> <br/><br/>

        <label>Password </label>
        <input type="text" placeholder="Please Enter Password Id" onChange={this.passwordHandler} /> <br/><br/>
        <input type="submit" value="Login..."/>
        </form>  

        <hr/>
        <pre>{JSON.stringify(this.state)}</pre>  
            </>
        )
    }
}

export default Login
