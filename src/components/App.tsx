import React from 'react'

const MyCounter = () => {
  const handleClick = () => {
    console.log('click yeah!')
  }

  return (
    <div>
      <h1>Test NPM</h1>
      <button onClick={handleClick}>-</button>
    </div>
  )
}

export default MyCounter
