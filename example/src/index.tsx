import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyCounter } from 'hackathon-sdk-login'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Counter with predefined value</h2>
      <MyCounter />
    </div>
  </React.StrictMode>,
)
