import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';

function App() {

       const [grid, setGrid] = useState([]);
       const [mouseIsPressed, setMouseIsPressed] = useState(false);
       // useEffect hook to perform side effects, runs once after the initial render
       useEffect(() => {
              const initalGrid = createInitialGrid();
              setGrid(initalGrid);
       }, []) // Empty dependency array means this effect runs only once

       // Function to create the initial grid
       const createInitialGrid = () => {
              const grid = [];
              // Loop through the 20 rows
              for (let row = 0; row < 20; row++) {
                     const currentRow = [];
                     // loop through the 50 cloumns in each row
                     for (let col = 0; col < 50; col++) {
                            // Create a node for each cell and add it to the current row
                            currentRow.push(createNode(row, col));
                     }
                     // Add the current row to the grid
                     grid.push(currentRow);
              }
              return grid;
       };
       // Function to create a node object
       const createNode = (row, col) => {
              return {
                     col,
                     row,
                     isStart: row === 10 && col === 5,  // Boolean indicating if this node is the start node
                     isFinish: row === 10 && col === 45, // Boolean indicating if this node is the finish node
                     distance: Infinity, // Distance value used in pathfinding algorithms
                     isVisited: false, // Boolean indicating if this node has been visited
                     isWall: false, //Boolean indicating if this node is a wall
                     previousNode: null, // Reference to the previous node in the path
              };
       };

       // handel Mouse Down
       const handelMouseDown = (row, col) => {
              const newGrid = getNewGridWithWallToggled(grid, row, col);
              setGrid(newGrid);
              setMouseIsPressed(true);
       }

       const handelMouseEnter = (row, col) => {
              if (!mouseIsPressed) return;
              const newGrid = getNewGridWithWallToggled(grid, row, col);
              setGrid(newGrid);
       }

       const handelMouseUp = () => {
              setMouseIsPressed(false);
       };

       const getNewGridWithWallToggled = (grid, row, col) => {
              if (!grid[row] || !grid[row][col]) {
                     console.error(`Invalid grid position: (${row}, ${col})`);
                     return grid;
              }
              const newGrid = grid.slice();
              const node = newGrid[row][col];
              const newNode = {
                     ...node,
                     isWall: !node.isWall,
              }
              newGrid[row][col] = newNode;
              return newGrid;
       }

       return (
              <div className="App">
                     <Grid
                            grid={grid}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={handelMouseDown}
                            onMouseEnter={handelMouseEnter}
                            onMouseUp={handelMouseUp}
                     />
              </div>
       );
}

export default App;
