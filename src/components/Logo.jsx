import React from 'react'
import icon  from "../assets/icon.png"

function Logo({width='50px'}) {
  return (
    <div className='w-11'>
      <img src={icon} alt="Icon" />
    </div>
  )
}

export default Logo
