import React from 'react'

function Welcome() {
    const hour=new Date().getHours;
    const greet = hour<12? "goodmorning":
    hour<17? "goodafternoon":"GoodEvening"
  return (
    <div>
     <h1>{greet}</h1>
    </div>
  )
}

export default Welcome
