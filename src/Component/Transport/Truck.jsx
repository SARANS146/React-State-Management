import React from 'react'
import trucks from './trucks'

function Truck() {
  return (
    <div>
      {trucks.map((truck, index) => (
      <article key={index}>
          <img src={truck.url} height={150} width={150} alt={truck.name} />
          <p>{truck.name}</p>
          <p>{truck.color}</p>
        </article>
        ))}
    </div>
  )
}

export default Truck
