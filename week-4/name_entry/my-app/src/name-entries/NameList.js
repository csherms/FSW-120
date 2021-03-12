import React, { Component } from 'react';
import NameCard from './NameCard';

class NameList extends Component {

    render() {
    const mappedNames = this.props.allNames.map( name => {
        return (
            <NameCard 
                fullName={name.fullName}
            />
        );
    })
        return (
            <div>
                <ol>
                    {mappedNames}
                </ol>
            </div>
        );
    }
}

export default NameList;