
import React, { Component } from 'react';
import BadgeCard from '../badgeCard/BadgeCard';

class BadgeList extends Component {

    render() {
    const mappedBadges = this.props.nameBadges.map( badge => {
        return (
            <BadgeCard 
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                placeOfBirth={badge.placeOfBirth}
                phone={badge.phone}
                favoriteFood={badge.favoriteFood}
                textArea={badge.textArea}
            />
        );
    })
        return (
            <div>
                {mappedBadges}
            </div>
        );
    }
}

export default BadgeList;