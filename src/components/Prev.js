import React from 'react'

const Prev = ({ movePage }) => {
  return (
    <div className='container__button' onClick={() => movePage('prev')}>
        <p className='container__text'>{`<< Opciones Anteriores`}</p>
    </div>
  )
}

export default Prev