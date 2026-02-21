import React from 'react'
import { useState } from 'react'

function ToggleTheme() {
  const [dark, setDark] = useState("dark");
  const[show,setShow]=useState(true);

  return (
    <div
      style={{
        backgroundColor: dark === "dark" ? "black" : "white",
        color: dark === "dark" ? "white" : "black",
        height: "100px"
      }}
    >
      <h1>Welcome to Kce</h1>

      <button onClick={() => setDark(dark === "dark" ? "light" : "dark")}>
        {dark === "dark" ? "light Theme" : "dark Theme"}
      </button>
    </div>
  )
}

export default ToggleTheme