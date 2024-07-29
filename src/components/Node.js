import React from 'react';
import './css/Node.css';

const Node = ({ node, mouseIsPressed, onMouseDown, onMouseEnter, onMouseUp }) => {
       const { row, col, isStart, isFinish, isWall } = node;
       const extraClassName = isStart ? 'node-start' : isFinish ? 'node-finish' : isWall ? 'node-wall' : '';

       return (
              <div
                     id={`node-${row}-${col}`}
                     className={`node ${extraClassName}`}
                     onMouseDown={() => onMouseDown(row, col)}
                     onMouseEnter={() => onMouseEnter(row, col)}
                     onMouseUp={() => onMouseUp()}
              />
       );
};

export default Node;
