import React from 'react'

const ThemeChanger = (props) => {
    const {darkMode} = props
    const {setDarkMode} = props
    
    return (
        <button className="toggle-button" onClick={() => setDarkMode(!darkMode)}>
            <span className="theme-icon" style={darkMode ? { color: "yellow" } : { color: "#c96dfd" }}>
                {darkMode ? "☀" : "☽"}
            </span>
            <span className="theme-text">
                {darkMode ? "Light" : "Dark"}
            </span>
        </button>
    )
}

export default ThemeChanger