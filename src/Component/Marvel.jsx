import React from 'react'
import Deadpool from './Deadpool'


function Marvel() {
  return (
    <div>
      <h1>Marvel characters</h1>

      {Deadpool.map((marvel, index) => (
        <article key={index}>
          <img src={marvel.url} height={200} width={200} alt={marvel.name} />
          <p>{marvel.name}</p>
          <p>{marvel.universe}</p>
        </article>
      ))}
    </div>
  )
}

export default Marvel