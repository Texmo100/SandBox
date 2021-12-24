import React, { useState } from 'react';
import styles from './TravelForm.module.css';

const TravelForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [destination, setDestination] = useState('');
    const [isVegan, setIsVegan] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const inputHandler = event => {
        const { type, name, value } = event.target;

        if (type === "checkbox") {
            if (name === 'isVegan') setIsVegan(!isVegan);
            if (name === 'isLactoseFree') setIsLactoseFree(!isLactoseFree);
        } else {
            if (name === 'firstName') setFirstName(value);
            if (name === 'lastName') setLastName(value);
            if (name === 'age') setAge(value);
            if (name === 'gender') setGender(value);
            if (name === 'destination') setDestination(value);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        alert("Info uploaded correctly")
        const userData = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            destination: destination,
            isVegan: isVegan,
            isLactoseFree: isLactoseFree
        };

        props.onSubmitData(userData);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Travel Form</h1>

            <div className={styles["form__element"]}>
                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={inputHandler}
                />
            </div>

            <div className={styles["form__element"]}>
                <label>Last Name: </label>

                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={inputHandler}
                />
            </div>

            <div className={styles["form__element"]}>
                <label>Age:</label>

                <input
                    type="number"
                    name="age"
                    value={age}
                    placeholder="Age"
                    onChange={inputHandler}
                />
            </div>

            <div className={styles["form__radio"]}>
                <div className={styles["form__radio__element"]}>
                    <label>Male:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={inputHandler}
                    />
                </div>

                <div className={styles["form__radio__element"]}>
                    <label>Female:</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={inputHandler}
                    />
                </div>
            </div>

            <div className={styles["form__element"]}>
                <label>Destination:</label>
                <select name="destination" value={destination} onChange={inputHandler}>
                    <option value="">---- Select destiny ----</option>
                    <option value="japan">Japan</option>
                    <option value="south korea">South Korea</option>
                    <option value="china">China</option>
                </select>
            </div>

            <div className={styles["form__checkbox"]}>
                <div className={styles["form__checkbox__element"]}>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={isLactoseFree}
                        onChange={inputHandler}
                    />
                    <label>is Lactose Free?</label>
                </div>

                <div className={styles["form__checkbox__element"]}>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={isVegan}
                        onChange={inputHandler}
                    />
                    <label> is Vegan?</label>
                </div>
            </div>

            <button className={styles["form__submit-button"]}>Submit</button>
        </form>
    );
}

export default TravelForm;
