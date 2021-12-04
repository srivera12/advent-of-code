const fs = require('fs');
const input = fs.readFileSync('./day1Input.txt', 'utf-8');
const depths = input.split('\n').map((l) => Number(l));

function findSingleDepthIncreases(depthData) {
  let depthIncreases = 0;
  for (let i = 0; i < depthData.length; i++) {
    if (depthData[i] < depthData[i + 1]) {
      depthIncreases = depthIncreases + 1;
    }
  }
  console.log(depthIncreases);
}
findSingleDepthIncreases(depths);

function findTripleDepthIncreases(depthData) {
  let depthIncreases = 0;
  for (let i = 0; i < depthData.length; i++) {
    let tripleDepthA = depthData[i] + depthData[i + 1] + depthData[i + 2];
    let tripleDepthB = depthData[i + 1] + depthData[i + 2] + depthData[i + 3];
    if (tripleDepthA < tripleDepthB) {
      depthIncreases = depthIncreases + 1;
    }
  }
  console.log(depthIncreases);
}
findTripleDepthIncreases(depths);
