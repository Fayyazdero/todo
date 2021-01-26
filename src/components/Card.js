import React from 'react'

export const Card = (props) => {
  const {image, name, occupation, university} = props
  return (
    <div className="className">
      <img src={image} alt="img"/>
      <h2>{name}</h2>
      <p>{occupation}</p>
      <p>{university}</p>
    </div>
  )
}

