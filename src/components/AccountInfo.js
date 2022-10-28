import React from 'react'

const AccountInfo = ({item}) => {

    let type = (item.tipo_letras.toLowerCase === 'ca') ? 'Caja de Ahorro ' : "Cuenta Corriente ";
    type += (item.moneda === "$") ? 'en Pesos' : 'en Dolares';

  return (
    <section className='content'>
        <h2 className='content__subtitle'>Consulta de Saldo</h2>
        <h1 className='content__title'>Este es tu saldo actual</h1>
        <div className='query'>
            <p className='query__text'>{`${item.moneda} ${item.saldo}`}</p>
            <p className='query__text'>Tipo de cuenta: {type}</p>
            <p className='query_text'>Número de cuenta: {item.n}</p>
        </div>
    </section>
  )
}

export default AccountInfo