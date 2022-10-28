import React from 'react'

const Card = ({data, handleSelectedAccount}) => {
    const type = (data.tipo_letras.toLowerCase === 'cc') ? 'Cuenta Corriente' : 'Caja de Ahorro'
    let nroCuenta = data.n.trim()
    nroCuenta = (nroCuenta !== '') ? nroCuenta : '-'
    return (
    <div className='container__card' onClick={() => handleSelectedAccount(data.n)}>
        <h4 className='container__type'>{type}</h4>
        <p className='container__number'>{nroCuenta}</p>
    </div>
  )
}

export default Card