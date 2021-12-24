import React from 'react';

const TravelInfo = props => {
    const { userData } = props;

    const firstName = userData.firstName === undefined || userData.firstName === '' ? '----' : userData.firstName;
    const lastName = userData.lastName === undefined || userData.lastName === '' ? '----' : userData.lastName;
    const age = userData.age === undefined || userData.age === 0 ? '----' : `${userData.age} years old`;
    const gender = userData.gender === undefined || userData.gender === ''? '----' : userData.gender;
    const destination = userData.destination === undefined || userData.destination === '' ? '----' : userData.destination;
    const isLactoseFree = userData.isLactoseFree ? 'yes' : 'no';
    const isVegan = userData.isVegan ? 'yes' : 'no';

    return (
        <div>
            <h2>Entered information:</h2>
            <p>first name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Your age: {age}</p>
            <p>Your gender: {gender}</p>
            <p>Your destination: {destination}</p>
            <h3>Dietary Restrictions</h3>
            <p>is Lactose Free: {isLactoseFree}</p>
            <p>is Vegan ?: {isVegan}</p>
        </div>
    );
}

export default TravelInfo;