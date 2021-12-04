// reading input
const fs = require('fs');
const report = fs.readFileSync('./day3Input.txt', 'utf-8').split('\n');

// PROBLEM 1
// calculating binary number of most frequent bits
let gammaRate = [];
for (let i = 0; i < report[0].length; i++) {
  let one = 0;
  let zero = 0;
  report.map((line) => {
    if (line[i] === '1') {
      one++;
    } else {
      zero++;
    }
  });
  if (one > zero) {
    gammaRate.push(1);
  } else {
    gammaRate.push(0);
  }
}
gammaRate = gammaRate.join('');
console.log(gammaRate);

// calculating binary number of least frequent bits
let epsilonRate = [];
for (let i = 0; i < report[0].length; i++) {
  let one = 0;
  let zero = 0;
  report.map((line) => {
    if (line[i] === '1') {
      one++;
    } else {
      zero++;
    }
  });
  if (one < zero) {
    epsilonRate.push(1);
  } else {
    epsilonRate.push(0);
  }
}
epsilonRate = epsilonRate.join('');
console.log(epsilonRate);

// converting to decimal
function binaryToDec(binaryNumber) {
  const binaryArray = binaryNumber.split('').reverse();
  let decimalNumber = 0;
  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === '1') {
      decimalNumber = decimalNumber + Math.pow(2, i);
    }
  }
  return decimalNumber;
}

// making rates to decimal, calculating power consumption, printing results
const decGammaRate = binaryToDec(gammaRate);
const decEpsilonRate = binaryToDec(epsilonRate);
const powerConsumption = decGammaRate * decEpsilonRate;
console.log(decGammaRate, decEpsilonRate, powerConsumption);

// PROBLEM 2
// filtering values by most frequent bit in each place
function oxygenGeneratorRating(reportArray) {
  let oxygenRating = reportArray;
  for (let i = 0; i < reportArray[0].length; i++) {
    let one = 0;
    let zero = 0;
    oxygenRating.map((line) => {
      if (line[i] === '1') {
        one++;
      } else {
        zero++;
      }
    });
    if (one > zero || one === zero) {
      oxygenRating = oxygenRating.filter((num) => num[i] === '1');
    } else if (one < zero) {
      oxygenRating = oxygenRating.filter((num) => num[i] === '0');
    }
  }
  oxygenRating = oxygenRating.join('');
  return binaryToDec(oxygenRating);
}

// getting CO2 scrubber rating
function co2GeneratorRating(reportArray) {
  let co2Rating = reportArray;
  for (let i = 0; i < reportArray[0].length; i++) {
    let one = 0;
    let zero = 0;
    co2Rating.map((line) => {
      if (line[i] === '1') {
        one++;
      } else {
        zero++;
      }
    });
    if (one < zero) {
      co2Rating = co2Rating.filter((num) => num[i] === '1');
    } else if (one > zero || one === zero) {
      co2Rating = co2Rating.filter((num) => num[i] === '0');
    }
    if (co2Rating.length === 1) break;
  }
  co2Rating = co2Rating.join('');
  return binaryToDec(co2Rating);
}

// getting oxygen, CO2, and life support ratings
const oxygen = oxygenGeneratorRating(report);
const co2 = co2GeneratorRating(report);
const lifeSupport = oxygen * co2;
console.log(oxygen, co2, lifeSupport);
