import React from 'react';
import './App.css';
import DiceBox from './components/DiceBox';

class App extends React.Component{
    render(){
        return(
            <div className="box-container">
                <DiceBox/>
            </div>
        )
    }
}

export default App;