import React from 'react';
import './toolkit.css';
import data from './data'
import ToolkitCard from './toolkitCard';


export default function Toolkit() {
    
    const cards = data.map(item=>{
        return (<ToolkitCard
        key={item.id}
        item={item}
        />)
    })

    return (
      <div className='team-container'>
        <h1 className="toolkit-title" >Our Tech Stack</h1>
        <div className="card-container">
          {cards}
        </div>
      </div>
    )
}