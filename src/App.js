import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from './components/Grid';
import { dijkstra, getNodesInShortestPathOrder } from './algorithms/dijkstra';
import ControlPanel from './components/ControlPanel';

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

       // Dijkstra animation code and implementation
       const animateDijkstra = (visitedNodeInOrder, nodesInShortestPathOrder) => {
              for (let i = 0; i <= visitedNodeInOrder.length; i++) {
                     if (i === visitedNodeInOrder.length) {
                            setTimeout(() => {
                                   animateShortestPath(nodesInShortestPathOrder);
                            }, 10 * i);
                            return;
                     }
                     setTimeout(() => {
                            const node = visitedNodeInOrder[i];
                            if (!node.isStart && !node.isFinish) {
                                   document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-visited';
                            } else {
                                   console.error('Node is undefined at index:', i);
                            }
                     }, 10 * i);
              }
       };

       const animateShortestPath = (nodesInShortestPathOrder) => {
              for (let i = 0; i <= nodesInShortestPathOrder.length; i++) {
                     setTimeout(() => {
                            const node = nodesInShortestPathOrder[i];
                            if (node) {
                                   document.getElementById(`node-${node.row}-${node.col}`).className = 'node node-shortest-path';
                            } else {
                                   console.error('Node is undefined at index:', i);
                            }
                     }, 50 * i);
              }
       };

       const visualizeDijkstra = () => {
              const newGrid = [...grid];
              const startNode = newGrid[10][5];
              const finishNode = newGrid[10][45];
              const visitedNodesInOrder = dijkstra(newGrid, startNode, finishNode);
              const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
              animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
       };

       // Control Pannel Functions
       const resetGrid = () => {
              const initialGrid = createInitialGrid();
              setGrid(initialGrid);
              // Reset all node classes
              for (let row = 0; row < 20; row++) {
                     for (let col = 0; col < 50; col++) {
                            const node = document.getElementById(`node-${row}-${col}`);
                            if (node) {
                                   node.className = 'node';
                            }
                     }
              }
              // Reapply start and finish node classes
              document.getElementById('node-10-5').className = 'node node-start';
              document.getElementById('node-10-45').className = 'node node-finish';
       }

       return (
              <div className="App">
                     <ControlPanel onReset={resetGrid} onVisulize={visualizeDijkstra} />
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
