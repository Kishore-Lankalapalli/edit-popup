import {useState} from 'react'

import Popup from 'reactjs-popup'

import './App.css'

const App = () => {
  const [isClicked, setStatus] = useState(false)
  console.log(isClicked)
  return (
    <div>
      <div className="nav-container">
        <p className="nav-item">File</p>
        <Popup
          trigger={
            <button
              className={isClicked ? 'clicked-button' : 'non-clicked-button'}
            >
              <p
                onClick={() => setStatus(!isClicked)}
                className={isClicked ? 'nav-item clicked-nav-item' : 'nav-item'}
              >
                Edit
              </p>
            </button>
          }
          position="bottom left"
        >
          <ul className="pop-up-container">
            <li className="item-container">
              <p>Undo</p>
              <p>CmdZ</p>
            </li>

            <li className="item-container">
              <p>Redo</p>
              <p>CmdY</p>
            </li>
            <hr className="line" />

            <li className="item-container">
              <p className="cut-text">Cut</p>
              <p>CmdX</p>
            </li>

            <li className="item-container">
              <p className="cut-text">Copy</p>
              <p>CmdC</p>
            </li>

            <li className="item-container">
              <p>Paste</p>
              <p>CmdV</p>
            </li>

            <li className="item-container">
              <p>Select All</p>
              <p>CmdA</p>
            </li>

            <hr className="line" />
            <li className="item-container">
              <p>Find And Replace</p>
              <p>CmdH</p>
            </li>
          </ul>
        </Popup>
        <p className="nav-item">Format</p>
        <p className="nav-item">View</p>
        <p className="nav-item">History</p>
        <p className="nav-item">Bookmarks</p>
        <p className="nav-item">Tools</p>
        <p className="nav-item">Help</p>
      </div>
    </div>
  )
}
export default App
