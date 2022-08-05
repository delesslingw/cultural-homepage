import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { APIProvider } from './hooks/useAPI'
import { WindowSizeProvider } from './hooks/useWindowSize'
import { BrowserRouter as Router } from 'react-router-dom'
import { BreakpointProvider } from './hooks/useBreakpoints'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <APIProvider>
      <Router>
        <WindowSizeProvider>
          <BreakpointProvider>
            <App />
          </BreakpointProvider>
        </WindowSizeProvider>
      </Router>
    </APIProvider>
  </React.StrictMode>
)
