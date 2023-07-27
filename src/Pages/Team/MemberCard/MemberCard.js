import React from 'react'
import './MemberCard.css'

function MemberCard({img,name,title,link}) {
  return (
    <div className='member-card-container'>
        <div className='member-img'>
           <a href={link}><img src={img}></img></a> 
        </div>
        <div className='member-name'>{name}</div>
        <div className='member-title'>{title}</div>
    </div>
  )
}

export default MemberCard
