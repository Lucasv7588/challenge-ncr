import React from 'react'

const Next = ({ movePage }) => {
  return (
    <div className='container__button' onClick={() => movePage('next')}>
        <p className='container__text'>{'Mas opciones >>'}</p>
    </div>
  )
}

export default Next