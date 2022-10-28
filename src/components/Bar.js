import React from 'react'
import logo from '../img/logo.png'

const Bar = () => {
  return (
    <section className='bar'>
        <img 
            src={logo}
            alt='Brand logo'
            className='bar__logo'
        />
    </section>
  )
}

export default Bar