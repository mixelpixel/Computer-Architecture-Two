'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const logUpdate = require('log-update');

/****************************************************************
SCRIPT REQUIRES: `npm install log-update --save-dev`
invoke: `$ node script [opt: dataSizeMB seekTime_ms blockSizeKB]`
example `$ node HDDseek.js 5 9 4 100` <--- also DEFAULT arguments
Computer Architecture TWO example: `$ node HDDseek.js 100 9 4`

This simulation is contrained to EXCLUSIVELY emulating the
HDD seek time - not including read time or transmission of
data once read. For purposes of analysis.
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
    console.log(`\n      "In THEORY it will take ${blockSeekPerSec} seconds to seek ${dataSizeMB}MB of HDD data while`);
    console.log(`    constrained to both ${blockSize}KB HDD blocks & an average seek time of ${seekTime} milliseconds.`);
    console.log(`    Well... ${blockSeekPerSec} seconds if, and only if, the ${dataSizeMB}MB of data is ${fragmentation}% fragmented.`);
    console.log('       IT DEPENDS some on the rotational latency, the HDD state at time of the');
    console.log('    read request, and some other factors. Of course, we\'re only considering the');
    console.log('    seek time and not the read-in time of the head travelling over the block to');
    console.log('    deterministically react to the magnetic state of the block, nor the time');
    console.log('    travelling over the block relative to the HDD rpm, nor the amount of time');
    console.log('    for the read-in signal to be transduced into a signal which is sent along');
    console.log('    wires via electrons travelling at sub-lightspeed, and well, there\'s some');
    console.log('    considerable calculations to be made to factor in all the marginal aspects.');
    const timeEnd = process.hrtime(timeStart);
    const timeTotalSeconds = timeEnd[0];
    const timeTotalNanoseconds = timeEnd[0] + (timeEnd[1] / 1000000000);
    console.log(`       In PRACTICE, this simulation took roughly ${timeTotalNanoseconds} seconds. Yeah...`);
    console.log(`    ${timeTotalNanoseconds.toFixed(2)}... Yeah, about ${timeTotalSeconds}. M-hmm... ${timeTotalNanoseconds} seconds. Yeah. ${timeTotalSeconds}. . . ${timeTotalNanoseconds.toFixed(1)}. . .`);
    console.log(`       On AVERAGE, that ${seekTime} milliseconds per seek? Ah, ${seekTime}. . . maybe ${(((timeTotalNanoseconds) / target) * 1000).toFixed(0)}? ${(((timeTotalNanoseconds) / target) * 1000).toFixed(1)}, no...`);
    console.log(`    ${(((timeTotalNanoseconds) / target) * 1000).toFixed(3)} milliseconds. Yeah, definitely ${(((timeTotalNanoseconds) / target) * 1000)} milliseconds, definitely`);
    console.log(`    per seek it's ${(((timeTotalNanoseconds) / target) * 1000).toFixed(0)}, ${(((timeTotalSeconds + (timeEnd[1] / 1000000000)) / target) * 1000).toFixed(2)} milliseconds, definitely ${(((timeTotalNanoseconds) / target) * 1000)}...aaaaaaAAH!`);
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
Total blocks processed: ${blocks}
Percentage completed:   ${((((data / dataSizeKB) + (blocks / target)) / 2) * 100).toFixed(0)}%`);
  data += blocksPerSeek;
  blocks++;
};
/* 11. loop */
const cycle = setInterval(seek, seekTime);

// Q.E.F
