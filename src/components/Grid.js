import React from 'react';
import './css/Grid.css';

const Grid = ({ grid, mouseIsPressed, onMouseDown, onMouseEnter, onMouseUp }) => {
       return (
              <div className="grid">
                     {grid.map((row, rowIdx) => {
                            return (
                                   <div key={rowIdx} className="row">
                                          {row.map((node, nodeIdx) => {
                                                 const { row, col, isStart, isFinish, isWall } = node;
                                                 const extraClassName = isStart
                                                        ? 'node-start'
                                                        : isFinish
                                                               ? 'node-finish'
                                                               : isWall
                                                                      ? 'node-wall'
                                                                      : '';

                                                 return (
                                                        <div
                                                               id={`node-${row}-${col}`}
                                                               key={nodeIdx}
                                                               className={`node ${extraClassName}`}
                                                               onMouseDown={() => onMouseDown(row, col)}
                                                               onMouseEnter={() => onMouseEnter(row, col)}
                                                               onMouseUp={() => onMouseUp()}
                                                        ></div>
                                                 );
                                          })}
                                   </div>
                            );
                     })}
              </div>
       );
};

export default Grid;
