import React from 'react'
import '../App.css'
function calc(r){
    return 3.4*r*r;
}

function College() {
    const clg="karpagam college of engineering "
  return (
    <div>
    <h1 classname="read-the-docs">Area:{calc(7)}</h1>
    </div>
  )
}

export default College
