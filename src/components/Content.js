import React from 'react'
import CardContainer from './CardContainer'
import AccountInfo from './AccountInfo'
import { useState } from 'react'

const Content = ({accounts}) => {

  const [page, setPage] = useState(1);
  const [items, setItems] = useState([])
  const [data, setData] = useState({
    selectedAccount: false,
    accountNumber: ''
  })

  const cantPages = Math.ceil(accounts.length / 5)

  const movePage = action => {
    if(action === 'next') {
      if(page < cantPages){
        setPage(page + 1)
      }
    }
    if(action === 'prev'){
      if(page > 1) {
        setPage(page - 1)
      }
    }
  }

  const handleSelectedAccount = n => {
    setData({
      selectedAccount: true,
      accountNumber: n
    })
  }

  if(data.selectedAccount){
    return(
      <AccountInfo 
        item={accounts.find(item => item.n === data.accountNumber)}
      />
    )
  }

  return (
    <section className='content'>
        <h2 className='content__subtitle' onClick={() => movePage('next')}>Consulta de Saldo</h2>
        <h1 className='content__title' onClick={() => movePage('prev')}>Seleccione la cuenta a consultar</h1>
        <CardContainer 
          handleSelectedAccount={handleSelectedAccount}
          accounts={accounts}
          page={page}
          movePage={movePage}
        />
    </section>
  )
}

export default Content