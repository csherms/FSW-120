import React from 'react';
import NameList from '../NameList';
import './name-form.css';

class NameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            allNames: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newName = {
            fullName: this.state.fullName
        }
        this.setState({ 
            allNames : [ newName, ...this.state.allNames ], 
            fullName: ""
        })
    }

    render() {
        return (
            <div>
                <h1 id="write">{this.state.fullName}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="input-box"
                        type="text"
                        name="fullName"
                        value={this.state.fullName} 
                        placeholder="Enter Full Name" 
                        onChange={this.handleChange}
                        required={true}
                    />
                    <button className="submit-button">Submit</button>
                </form>
                <NameList
                    allNames={this.state.allNames}     
                />
            </div>
        );
    }
}


export default NameForm;