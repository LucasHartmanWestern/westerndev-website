import React from 'react'
import Membercards from "./Membercards"
import data from './data'
export default function Aboutus(){

const cards = data.map(item=>{
  return (<Membercards
    key={item.id}
    item={item}
  />)
})

  return (
    <div className="aboutus">
    <h1 className="title" >Meet the Team!</h1>
    <div className="card">
      {cards}
    </div>
    </div>
  )
}
