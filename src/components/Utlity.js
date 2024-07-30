// BAsically it is the sidebar for Dynamic Working
import React from 'react'
import './css/Utlity.css'

const Utlity = ({ onSetStart, onSetFinish }) => {
       return (
              <div className="util-sidebar">
                     <h4>Functions</h4>
                     <div className="funtion-buttons">
                            <button onClick={onSetStart}>Set Start Node</button>
                            <button onClick={onSetFinish}>Set Finish Node</button>

                     </div>
              </div>
       )
}

export default Utlity