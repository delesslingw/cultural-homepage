import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { APIProvider } from './hooks/useAPI'
import { WindowSizeProvider } from './hooks/useWindowSize'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <APIProvider>
      <WindowSizeProvider>
        <App />
      </WindowSizeProvider>
    </APIProvider>
  </React.StrictMode>
)
