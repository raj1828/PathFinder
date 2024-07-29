import React from 'react'
import './css/Node.css'

const Node = ({ node }) => {
       const { row, col, isStart, isFinish, isWall } = node;
       const extraClassName = isStart ? 'node-start' ? isFinish : 'node-finish' ? isWall : 'node-wall' : '';
       return (
              <>
                     <div id={`node-${row}-${col}`} className={`node ${extraClassName}`}>

                     </div>
              </>
       )
}

export default Node