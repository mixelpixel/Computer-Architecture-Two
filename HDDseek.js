/**********************************************************
invoke: `node <script.js> opt: milliseconds MegaBytes KB`
example `node HDDseek.js 9 100 4`
**********************************************************/
/* eslint no-console: 0 */
'use-strict';
const process = require('process'); // <~~~ Not needed, just making linter happy

// HDD seek time in milliseconds (defauts to 9)
const seekTime = process.argv[2] || 9;

// file size entered in Megabytes (defaults to 100MB)
const fileSizeMB = process.argv[3] || 100;
// const fileSizeMB = process.argv[3] || 1;
// convert MB to KB
const fileSizeKB = fileSizeMB * 1024;

// HDD block size in KB (default 4KB)
const blockSize = process.argv[4] || 4;

// Target number of blocks to seek which amount to file size
const target = fileSizeKB / blockSize;
// total data sought in KB
let data = 0;
console.log(`Total data sought: ${data}`);
// total number of data blocks sought
let blocks = 0;
console.log(`Total # of blocks: ${blocks}`);

console.log(`${seekTime}, ${fileSizeMB}, ${fileSizeKB}, ${blockSize}, ${target}, ${data}, ${blocks}`);
const timeStart = process.hrtime();

// HDD seek emulator
const seek = () => {
  if(data === fileSizeKB) {
    clearInterval(seek);
    console.log(`In theory it takes ${blocks * seekTime / 1000} seconds to seek ${fileSizeMB}MB of data ${blockSize}KB at a time.`);
    const timeEnd = process.hrtime(timeStart);
    console.log(`In practice, it took roughly ${timeEnd[0]} seconds and ${timeEnd[1]} nanoseconds`);
    return;
  }
  data += blockSize;
  console.log(`Target for data sought: ${fileSizeKB}KB`);
  console.log(`Total data sought:      ${data}KB\n`);
  blocks++;
  console.log(`Target # of blocks:     ${target}`);
  console.log(`Total blocks processed: ${blocks}\n`);
};

// loop
const cycle = setInterval(seek, seekTime);
