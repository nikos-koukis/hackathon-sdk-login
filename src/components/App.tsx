import React from 'react'

const MyCounter = () => {
  const handleClick = () => {
    console.log('click yeah now!')
  }

  return (
    <div>
      <h1>Test NPM1</h1>
      <button onClick={handleClick}>-</button>
    </div>
  )
}

export default MyCounter
