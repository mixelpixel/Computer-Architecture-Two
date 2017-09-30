'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy

/****************************************************************
invoke: `$ node script [opt: dataSizeMB seekTime_ms blockSizeKB]`
example `$ node HDDseek.js 5 9 4` <--- also DEFAULT arguments
Computer Architecture TWO example: `$ node HDDseek.js 100 9 4`
****************************************************************/

/* 1. file size entered in Megabytes (defaults to 5MB) */
const dataSizeMB = Number(process.argv[2]) || 5;
/* 2. convert MB to KB */
const dataSizeKB = dataSizeMB * 1024;
/* 3. HDD seek time in milliseconds (defauts to 9) */
const seekTime = Number(process.argv[3]) || 9;
/* 4. HDD block size in KB (default 4KB) */
const blockSize = Number(process.argv[4]) || 4;
/* 5. Target number of blocks to seek which contain the data size */
const target = dataSizeKB / blockSize;
/* 6. total ACTUAL data sought in KB */
let data = 0;
/* 7. total number of ACTUAL data blocks sought */
let blocks = 0;
/* 8. program timer */
const timeStart = process.hrtime();
/* 9. HDD seek emulator */
const seek = () => {
  if(data >= dataSizeKB) {
    clearInterval(cycle);
    console.log(`\n   "In THEORY it only takes ${blocks * seekTime / 1000} seconds to seek ${dataSizeMB}MB of HDD data while`);
    console.log(`    constrained to ${blockSize}KB blocks and an average seek time of ${seekTime} milliseconds.\n`);
    const timeEnd = process.hrtime(timeStart);
    console.log(`    In PRACTICE, it took roughly ${timeEnd[0] + (timeEnd[1] / 1000000000)} seconds. Yeah... ${(timeEnd[0] + (timeEnd[1] / 1000000000)).toFixed(2)}. . .`);
    console.log(`    Yeah, yeah, about ${timeEnd[0]}. M-hmm...${timeEnd[0] + (timeEnd[1] / 1000000000)} seconds. Yeah. ${timeEnd[0]}. . . ${(timeEnd[0] + (timeEnd[1] / 1000000000)).toFixed(1)}.\n`);
    console.log(`    ...and ${seekTime} milliseconds per seek? Ah, ${seekTime}. . . maybe ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000).toFixed(0)}, no ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000)} milliseconds.`);
    console.log(`    Yeah, definitely ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000)} milliseconds, definitely per seek, ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000).toFixed(1)} milliseconds.\n`);
    console.log('    HOT WATER BURN BABY!! HOT WATER BURN BABY!!!!"\n');
    console.log('    -- "Raymond Babbit" as played by Dustin Hoffman (1998, "Rain Man")\n');
    return;
  }
  data += blockSize;
  blocks++;
  console.log(`Target for data sought: ${dataSizeKB}KB`);
  console.log(`Total data sought:      ${data}KB\n`);
  console.log(`Target # of blocks:     ${target}`);
  console.log(`Total blocks processed: ${blocks}\n`);
};
/* 10. loop */
const cycle = setInterval(seek, seekTime);

// Q.E.F
