import React from 'react'
import './DjReact.css'


class DjReact extends React.Component {
    constructor() {
        super()
        this.state = {
            squares: ["white", "white", "white", "white"] 
        }
    }

    djSmall = () => {
        this.setState(prevState => {
            let square1 = "black";
            let square2 = "black";
            let square3 = "black";
            let square4 = "black";
            return {
                squares: [square1, square2, square3, square4]
            }
        })
    }

    djParty = () => {
        this.setState(prevState => {
            let square1 = "green"; 
            let square2 = "green";
            return {
                squares: [square1, square2, prevState.squares[2], prevState.squares[3]]
            }
        })
    }

    djProLeft = () => {
        this.setState(prevState => {
            let square3 = "blue"; 
            return {
                squares: [prevState.squares[0], prevState.squares[1], square3, prevState.squares[3]]
            }
        })
    }

    djProRight = () => {
        this.setState(prevState => {
            let square4 = "blue"; 
            return {
                squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], square4]
            }
        })
    }

    djBig1 = () => {
        this.setState(prevState => {
            let square1 = "red"; 
            return {
                squares: [square1, prevState.squares[1], prevState.squares[2], prevState.squares[3]]
            }
        })
    }
    
    djBig2 = () => {
        this.setState(prevState => {
            let square2 = "purple"
            return {
                squares: [prevState.squares[0], square2, prevState.squares[2], prevState.squares[3]]
            }
        })
    }

    djBig3 = () => {
        this.setState(prevState => {
            let square3 = "greenyellow"
            return {
                squares: [prevState.squares[0], prevState.squares[1], square3, prevState.squares[3]]
            }
        })
    }

    djBig4 = () => {
        this.setState(prevState => {
            let square4 = "orange"
            return {
                squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], square4]
            }
        })
    }

    render() {
        return(
            <div>
            <div>
                <h1>DJ REACT</h1>
                <div style={{background: this.state.squares[0]}} className="dj-box"></div>
                <div style={{background: this.state.squares[1]}} className="dj-box"></div>
                <div style={{background: this.state.squares[2]}} className="dj-box"></div>
                <div style={{background: this.state.squares[3]}} className="dj-box"></div>
            </div>
            <div>
                <button onClick={this.djSmall}>SMALL TIME</button>
                <button onClick={this.djParty}>PARTY DJ</button>
                <button onClick={this.djProLeft}>DJ PRO LEFT</button>
                <button onClick={this.djProRight}>DJ PRO RIGHT</button>
                <button onClick={this.djBig1}>BIG TIME 1</button>
                <button onClick={this.djBig2}>BIG TIME 2</button>
                <button onClick={this.djBig3}>BIG TIME 3</button>
                <button onClick={this.djBig4}>BIG TIME 4</button>
            </div>
            </div>
        )
    }
}

export default DjReact