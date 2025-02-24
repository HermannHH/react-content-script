/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import logo from './logo.svg'
import './App.css'

function getLogo() {
  if (window.chrome) {
    return window.chrome.runtime.getURL(logo.toString())
  }

  return logo
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={`${getLogo()}`} className="App-logo" alt="logo" />
        <p>Hello, World!</p>
        <p>{window.location.origin}</p>
      </header>
    </div>
  )
}

export default App


