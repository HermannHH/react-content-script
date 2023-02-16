import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import {capture, OutputType} from 'html-screen-capture-js';

function getLogo() {
  if (window.chrome) {
    return window.chrome.runtime.getURL(logo.toString())
  }

  return logo
}

function App() {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [docString, setDocString] = useState<string>('');

  const htmlDocStr = capture(
    OutputType.STRING,
    window.document,
  );


  const captureUrl = async () => {
    alert({ htmlDocStr })
  }

  useEffect(() => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const url = tabs[0].url
      if (url) {
        setCurrentUrl(url)
      }
    });
  }, [])

  return (
    <div style={{ width: '340px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <button onClick={() => captureUrl()}>Capture</button>
        <p>{currentUrl}</p>
    </div>
  )
}

export default App


