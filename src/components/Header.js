import React from 'react'
import './css/Header.css'

const Header = ({ onVisualize, onReset }) => {
       return (
              <header className='header'>
                     <h1>PathDiscovery</h1>
                     <div className="algo-buttons">
                            <button onClick={onVisualize}>Dijkstra</button>
                            <button onClick={onVisualize}>A * Algorithm</button>
                            <button onClick={onVisualize}>Greedy</button>
                     </div>
                     <div className="reset">
                            <button onClick={onReset}>Reset</button>
                     </div>
              </header>
       )
}

export default Header