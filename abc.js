'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const logUpdate = require('log-update');

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
/* 5. HDD fragmentation */
const fragmentation = process.argv[5] || 100;
const fragPercent = fragmentation / 100;
/* 6. Target number of blocks to seek which contain the data size */
const target = dataSizeKB / blockSize;
/* 7. total ACTUAL data sought in KB */
let data = 0;
/* 8. total number of ACTUAL data blocks sought */
let blocks = 0;
/* 9. program timer */
const timeStart = process.hrtime();
/* 10. HDD seek emulator */
const seek = () => {
  if(data >= dataSizeKB) {
    clearInterval(cycle);
    const blockSeekPerSec = blocks * seekTime / 1000;
    console.log(`\n   "In THEORY it only takes ${blockSeekPerSec} seconds to seek ${dataSizeMB}MB of HDD data while`);
    console.log(`    constrained to ${blockSize}KB blocks and an average seek time of ${seekTime} milliseconds.`);
    console.log(`    ${blockSeekPerSec} seconds if, and only if, the ${dataSizeMB}MB of data is ${fragmentation}% fragmented.\n`);
    const timeEnd = process.hrtime(timeStart);
    const timeTotalSeconds = timeEnd[0];
    const timeTotalNanoseconds = timeEnd[0] + (timeEnd[1] / 1000000000);
    console.log(`    In PRACTICE, it took roughly ${timeTotalNanoseconds} seconds. Yeah... ${timeTotalNanoseconds.toFixed(2)}. . .`);
    console.log(`    Yeah, yeah, about ${timeTotalSeconds}. M-hmm...${timeTotalNanoseconds} seconds. Yeah. ${timeTotalSeconds}. . . ${timeTotalNanoseconds.toFixed(1)}.\n`);
    console.log(`    ...and ${seekTime} milliseconds per seek? Ah, ${seekTime}. . . maybe ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000).toFixed(0)}, no ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000)} milliseconds.`);
    console.log(`    Yeah, definitely ${(((timeEnd[0] + (timeEnd[1] / 1000000000)) / target) * 1000)} milliseconds, definitely per seek, ${(((timeTotalSeconds + (timeEnd[1] / 1000000000)) / target) * 1000).toFixed(1)} milliseconds... ummm,`);
    console.log('    HOT WATER BURN BABY!! HOT WATER BURN BABY!!!!"\n');
    console.log('    -- "Raymond Babbit" as played by Dustin Hoffman (1998, "Rain Man")\n');
    return;
  }
  // Some fudge
  let blocksPerSeek;
  if (Number(fragmentation) < 1) {
    blocksPerSeek = dataSizeKB;
  } else { blocksPerSeek = blockSize / fragPercent; }
  logUpdate(`
Target for data sought: ${dataSizeKB}KB
Total data sought:      ${data}KB
Target # of blocks:     ${target}
Total blocks processed: ${blocks}`);
  data += blocksPerSeek;
  blocks++;
};
/* 11. loop */
const cycle = setInterval(seek, seekTime);

// Q.E.F