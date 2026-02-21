import React from 'react'
import bikes from './Bikes'

function Bike() {
  return (
    <div>
      <h1>Bike Info</h1>

      {bikes.map((bike, index) => (
        <article key={index}>
          <img 
            src={bike.url} 
            height={150} 
            width={150} 
            alt={bike.name} 
          />
          <p>{bike.name}</p>
          <p>{bike.color}</p>
        </article>
      ))}

    </div>
  )
}

export default Bike
