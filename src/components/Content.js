import React from 'react'
import CardContainer from './CardContainer'

const Content = () => {
  return (
    <section className='content'>
        <h2 className='content__subtitle'>Consulta de Saldo</h2>
        <h1 className='content__title'>Seleccione la cuenta a consultar</h1>
        <CardContainer />
    </section>
  )
}

export default Content