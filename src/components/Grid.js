import React from 'react'
import Node from './Node'
import './css/Grid.css'

const Grid = ({ grid, mouseIsPressed, onMouseDown, onMouseEnter, onMouseUp }) => {
       return (
              <>
                     <div className="grid">
                            {grid.map((row, rowIdx) => (
                                   <div key={rowIdx} className="grid-row">
                                          {row.map((node, nodeIdx) => (
                                                 <Node
                                                        key={nodeIdx}
                                                        node={node}
                                                        onMouseDown={onMouseDown}
                                                        onMouseEnter={onMouseEnter}
                                                        onMouseUp={onMouseUp}
                                                        mouseIsPressed={mouseIsPressed}
                                                 />
                                          ))}
                                   </div>
                            ))}
                     </div>
              </>
       );
};

export default Grid