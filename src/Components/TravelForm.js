import React from 'react'


const TravelForm = props => {
    return (
        <React.Fragment>
            <form className="form" onSubmit={props.handleSubmit}>
                <h1>Travel Form</h1>

                <div className="form-element">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={props.firstName}
                        placeholder="First Name"
                        onChange={props.handleChange}
                    />
                </div>

                <div className="form-element">
                    <label>Last Name: </label>

                    <input
                        type="text"
                        name="lastName"
                        value={props.lastName}
                        placeholder="Last Name"
                        onChange={props.handleChange}
                    />
                </div>

                <div className="form-element">
                    <label>Age:</label>

                    <input
                        type="number"
                        name="age"
                        value={props.age}
                        placeholder="Age"
                        onChange={props.handleChange}
                    />
                </div>

                <div className="group-radio">
                    <div className="radio-element">
                        <label>Male:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={props.gender === "male"}
                            onChange={props.handleChange}
                        />
                    </div>

                    <div className="radio-element">
                        <label>Female:</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={props.gender === "female"}
                            onChange={props.handleChange}
                        />
                    </div>
                </div>

                <div className="form-element">
                    <label>Destination:</label>
                    <select name="destination" value={props.destination} onChange={props.handleChange}>
                        <option value="">---- Select destiny ----</option>
                        <option value="japan">Japan</option>
                        <option value="south korea">South Korea</option>
                        <option value="china">China</option>
                    </select>
                </div>

                <div className="group-checkbox">
                    <div className="checkbox-element">
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={props.dietaryRestrictions.isLactoseFree}
                            onChange={props.handleChange}
                        />
                        <label>is Lactose Free?</label>
                    </div>

                    <div className="checkbox-element">
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={props.dietaryRestrictions.isVegan}
                            onChange={props.handleChange}
                        />
                        <label> is Vegan?</label>
                    </div>
                </div>

                <button className="submit-button">Submit</button>


            </form>
        </React.Fragment>
    )
}

export default TravelForm
