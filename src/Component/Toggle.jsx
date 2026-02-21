import React from 'react'
import { useState } from 'react'
import User from './state/User';

function Toggle() {
    const[show,setShow]=useState(true);
  return (
    <div>  
         <button onClick={()=>setShow(!show)}>{show? "Hide":"Show"}</button>
      { show && <h1> Welcome to kce</h1>}
    </div>
  );
}

export default Toggle
