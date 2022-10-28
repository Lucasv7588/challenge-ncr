import React, { useState, useEffect } from 'react'
import Bar from "./components/Bar";
import Bottom from "./components/Bottom";
import Content from "./components/Content";
import { URL } from './config';

export const getData = (url) => {
  if(typeof url != 'string') return {error: "URL invalida"}
  fetch(url).then(res => res.json())
}

function App() {

  const [data, setData] = useState({
    loading: true,
    error: false,
    accounts: []
  })

  const {loading, error, accounts} = data;

  useEffect(() => {
    setData({
      loading: true,
      error: false,
      accounts: []
    })
    fetch(URL).then(res => res.json()).then(data =>{
      let res = data.cuentas.filter(item => (item.tipo_letras.toLowerCase() === 'cc' || item.tipo_letras.toLowerCase() === 'ca') && (item.moneda === "$" || item.moneda === 'u$s'));
      res.sort(((a, b) => a.n - b.n));
      setData({
        loading: false,
        error: false,
        accounts: res
      })
    })
  }, [])

  if(loading) return(<>
    <Bar/>
    <div className='loading'>
      loading...
    </div>
    <Bottom />
    </>
  )

  if(error) return(<>
    <Bar/>
    <div>
      error...
    </div>
    <Bottom />
    </>
  )

  return (
    <div className="App">
      <Bar />
      <Content 
        accounts={accounts}
      />
      <Bottom />
    </div>
  );
}

export default App;
