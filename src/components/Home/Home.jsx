import React from 'react'
import Tech from '../../images/tech.png'

// images and styling tbd
export default function Home() {
  return (
    <div className='body'>
      <div className='navbar'>
        <div className='logo'>
          Logo
        </div>
        <div className="links">
          <div className="link">
            about us
          </div>

          <div className="link">
            portfolio
          </div>

          <div className="link">
            contact us
          </div>
        </div>
      </div>

      <div className="content">
        <div className="info">
          <div className="title">
            Western <br /> Developers <br /> Society
          </div>
          <div className="text">
            Building community, one life of code at a time.
          </div>
        </div>

        <div className="pic">
          pic goes here
        </div>
      </div>
    </div>

  )
}
