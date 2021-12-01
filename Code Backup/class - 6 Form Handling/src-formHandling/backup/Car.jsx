import React, { Component } from 'react'

export class Car extends Component {
    model= "C-XF";
    Brand= "Jaguar"
    price= "2CR"
    image= "https://i.pinimg.com/originals/cb/7a/0a/cb7a0afed02a98f5688d8c0796aace50.jpg"
    render() {
        return (
            <>
            <img src={this.image} alt="#" />
            <h1> Model: { this.model}</h1>
            <h2>Brand: {this.Brand}</h2>
            <h2>Price: {this.price}</h2>
            
            </>
        )
    }
}

export default Car
