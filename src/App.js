import React, { useState } from "react"
import ThemeChanger from './Components/ThemeChanger'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "wrapper dark-mode" : "wrapper light-mode"}>
      <ThemeChanger darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App
