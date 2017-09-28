'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy

/**********************************************************
invoke: `node <script.js> opt: dataSizeMB seekTime_ms blockSizeKB`
example `node HDDseek.js 100 9 4`
**********************************************************/

// file size entered in Megabytes (defaults to 100MB)
const dataSizeMB = Number(process.argv[2]) || 100;
// convert MB to KB
const dataSizeKB = dataSizeMB * 1024;

// HDD seek time in milliseconds (defauts to 9)
const seekTime = Number(process.argv[3]) || 9;

// HDD block size in KB (default 4KB)
const blockSize = Number(process.argv[4]) || 4;
// console.log(process.argv);

// Target number of blocks to seek which amount to file size
const target = dataSizeKB / blockSize;
// total data sought in KB
let data = 0;
console.log(`Total data sought: ${data}`);
// total number of data blocks sought
let blocks = 0;
console.log(`Total # of blocks: ${blocks}`);
console.log(`${seekTime}, ${dataSizeMB}, ${dataSizeKB}, ${blockSize}, ${target}, ${data}, ${blocks}`);

// program timer
const timeStart = process.hrtime();
// HDD seek emulator
const seek = () => {
  if(data === dataSizeKB) {
    clearInterval(cycle);
    console.log(`   "In theory it only takes ${blocks * seekTime / 1000} seconds to seek ${dataSizeMB}MB of HDD data `);
    console.log(`    while seeking out ${blockSize}KB blocks at a time and your seek time is ${seekTime} milliseconds.\n`);
    const timeEnd = process.hrtime(timeStart);
    console.log(`    In practice, it took roughly ${timeEnd[0] + (timeEnd[1] / 1000000000)} seconds. Yeah... ${(timeEnd[0] + (timeEnd[1] / 1000000000)).toFixed(2)}.`);
    console.log(`    Yeah, yeah, about ${timeEnd[0]}, ...${timeEnd[0] + (timeEnd[1] / 1000000000)} seconds. Yeah. ${timeEnd[0]}. . .`);
    console.log('    BAD BABY - HOT WATER!!!!!"\n');
    console.log('    -- "Raymond Babbit" as played by Dustin Hoffman (1998, "Rain Man")\n');
    return;
  }
  data += blockSize;
  console.log(`Target for data sought: ${dataSizeKB}KB`);
  console.log(`Total data sought:      ${data}KB\n`);
  blocks++;
  console.log(`Target # of blocks:     ${target}`);
  console.log(`Total blocks processed: ${blocks}\n`);
};

// loop
const cycle = setInterval(seek, seekTime);
