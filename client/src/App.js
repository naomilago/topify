import React, { useState, useEffect } from 'react'

function App() {

  const [ data, setData ] = useState([{}])

  useEffect(() => {
    fetch('/members').then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <>
      <div>
        <p>Welcome to <span>Topify</span>!</p>
        <p>Unleash the power of precise topic classification.</p>
      </div>
    </>
  )
}

export default App