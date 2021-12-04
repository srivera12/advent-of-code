// reading input
const fs = require('fs');
const directions = fs.readFileSync('./day2Input.txt', 'utf-8').split('\n');
const directionsArray = directions.map((line) => line.split(' '));
// console.log(directionsArray);

// problem 1: finding depth * forward movement
let depthDown = 0;
let depthUp = 0;
directionsArray.map((d) => {
  if (d[0] === 'down') {
    depthDown = depthDown + Number(d[1]);
  }
});
directionsArray.map((d) => {
  if (d[0] === 'up') {
    depthUp = depthUp + Number(d[1]);
  }
});
let forward = 0;
directionsArray.map((d) => {
  if (d[0] === 'forward') {
    forward = forward + Number(d[1]);
  }
});
const depth = depthDown - depthUp;
console.log(depth * forward);

// problem 2: with aim, which affects depth as a multiplier
let x = 0;
let y = 0;
let aim = 0;
directionsArray.map((d, i) => {
  if (d[0] === 'down') {
    aim = aim + Number(d[1]);
  } else if (d[0] === 'up') {
    aim = aim - Number(d[1]);
  } else if (d[0] === 'forward') {
    x = x + Number(d[1]);
    y = y + aim * Number(d[1]);
  }
});
console.log(x * y);
