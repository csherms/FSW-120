import React from 'react';
import Die from './Die';
import '../App.css'

class DiceBox extends React.Component {
    constructor() {
    super()
    this.state =  
    {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0
    }
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
            num1: Math.floor(Math.random() * 6),
            num2: Math.floor(Math.random() * 6),
            num3: Math.floor(Math.random() * 6),
            num4: Math.floor(Math.random() * 6),
            num5: Math.floor(Math.random() * 6)
            }
        })
    }
    render() {
        return (
            <div>
                <h1 className="header">Roll the Dice!</h1>
                <Die num={this.state.num1}/>
                <Die num={this.state.num2}/>
                <Die num={this.state.num3}/>
                <Die num={this.state.num4}/>
                <Die num={this.state.num5}/>
                <button className="button" onClick={this.handleClick}>Roll Dice!</button>
            </div>
        )
    }
}

export default DiceBox
