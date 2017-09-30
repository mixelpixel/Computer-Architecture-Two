'use-strict';
/* eslint no-console:0 */
const process = require('process');

// // process.stdout.write("Hello, World");
// // process.stdout.clearLine();
// // process.stdout.cursorTo(0);
// // process.stdout.write("\n");
//
// var readline = require('readline');
//
// const counter = (x) => {
//   while (x < 1000) {
//     console.log(x);
//     x++;
//   }
// }
//
// function writeWaitingPercent(p) {
//   readline.clearLine(process.stdout);
//   readline.cursorTo(process.stdout, 0);
//   process.stdout.write(`waiting ... ${p}%`);
// }
//
// function printProgress(progress){
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(progress + '%');
// }
//
//
// console.log(writeWaitingPercent(counter(0)));

const countToTen = () => {
  let x = 1;
  while (x <= 10) {
    console.log(`The value assigned to 'x' is now: ${x}`);
    x++;
  }
};

function printProgress(progress){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + '%');
}
const dataSizeMB = 5;
const dataSizeKB = dataSizeMB * 1024;
const seekTime = 9;
const blockSize = 4;
let data = 0;
let blocks = 0;

const seek = () => {
  if(data >= dataSizeKB) {
    clearInterval(cycle);
    console.log('    -- "Raymond Babbit" as played by Dustin Hoffman (1998, "Rain Man")\n');
    return;
  }
  data += blockSize;
  blocks++;
  console.log(`Target for data sought: ${dataSizeKB}KB`);
  printProgress(`Total data sought:      ${data}KB\n`);
  // console.log(`Target # of blocks:     ${target}`);
  // console.log(`Total blocks processed: ${blocks}\n`);
};
/* 10. loop */
const cycle = setInterval(seek, seekTime);
