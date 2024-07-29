import React from 'react'
import Node from './Node'
import './css/Grid.css'

const Grid = ({ grid }) => {
       return (
              <>
                     <div className="grid">
                            {grid.map((row, rowIdx) => (
                                   <div key={rowIdx} className="grid-row">
                                          {grid.map((node, nodeIdx) => (
                                                 <Node key={nodeIdx} node={node} />
                                          ))}
                                   </div>
                            ))}
                     </div>
              </>
       );
};

export default Grid