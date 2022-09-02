import React from 'react'
import './Aboutus.css'

export default function Membercards(props)
{
  return(
    <div className="memberCard">
    <h1>{props.item.name}</h1>
    <h3>{props.item.role}</h3>

    </div>
  )
}
