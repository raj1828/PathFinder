import React from 'react'

const ControlPanel = ({ onVisulize, onReset }) => {
       return (
              <div className="control-panel">
                     <button onClick={onVisulize}>Dijkstra Allgorith</button>
                     <button onClick={onReset}>Reset</button>
              </div>
       )
}

export default ControlPanel