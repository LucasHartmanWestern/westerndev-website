import React from 'react'
import "./UpcomingEvent.css"

function UpcomingEvent({name,date,descript,link}) {
  return (
    <a href={link} target="_blank">
    <div className='upcoming-event-container'>
        <div className='up-event-name'>{name}</div>
        <div className='up-event-date'>{date}</div>
        <div className='up-event-descript'>{descript}</div>
    </div>
    </a>
  )
}

export default UpcomingEvent
