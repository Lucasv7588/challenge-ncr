import React from 'react'
import Card from './Card'
import Prev from './Prev'
import Next from './Next'
import { useState, useEffect } from 'react'

const CardContainer = ({ accounts, page, movePage, handleSelectedAccount }) => {

    const [data, setData] = useState({
        prev: false,
        next: false,
        items: []
    });

    const { prev, next, items } = data

    useEffect(() => {
        if(page === 1){
          if(accounts.length === 6){
            setData({
                prev: false,
                next: false,
                items: accounts
            })
          } else {
            setData({
                prev: false,
                next: true,
                items: accounts.slice(0, 5)
            });
          }
        } else {
          let res = accounts.slice(5);
          res = res.slice(4*(page-2))
          if(res.length <= 5) {
            setData({
                prev: true,
                next: false,
                items: res
            })
          } else {
            setData({
                prev: true,
                next: true,
                items: res.slice(0, 4)
            })
          }
        }
      },[page, accounts])

  return (
    <div className='container'>
        {
            (prev) ? <Prev movePage={movePage}/> : ''
        }{
            items.map(item => (<Card handleSelectedAccount={handleSelectedAccount} key={`${item.n}${item.t}`} data={item}/>))
        }{
            (next) ? <Next movePage={movePage}/> : ''
        }
    </div>
  )
}

export default CardContainer