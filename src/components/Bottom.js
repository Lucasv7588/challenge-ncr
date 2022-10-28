import React from 'react'

const Bottom = () => {

  return (
    <section className='bottom'>
        <button className='bottom__button' onClick={() => {window.location.href = window.location.href}}>
          Salir
        </button>
    </section>
  )
}

export default Bottom