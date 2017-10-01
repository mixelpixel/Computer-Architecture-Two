# Assignment:

QUESTON: 1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

> I guess one way to figure an answer to *“How long on average does it take to read 100MB of data?“* would be to consider the average seek time for modern HDD’s (which per the wiki article seems more like in the range of 9ms) and then consider the range of cases where only one seek is needed when all the 4KB blocks are consecutive versus the number of seeks when *each and every* block is scattered about the disk…

> Oh.. and I guess the 100MB isn’t necessarily for just one file… Considering that in all likelihood, that each of the files comprising the 100MB are likely to be consecutive, even if the files aren't... we'd have to figure a probability for how many files constitute the sum total 100MB... We'd also need to consider, how many files constitute the 100MB. Of those files, are they all written in consecutive blocks, or fragmented about the drive?

> Another factor is the rotational latency and the state of the drive at the time of request. Is the drive at rest, or, currently at speed (e.g. 7200rpm). If at speed, how far is the head from the position of the starting block?

> Best case scenario, if the drive is at speed, and currently at the initial block, and there is one consecutively blocked 100MB file... It would take 9ms for the read head to seek to the initial block and then the amount of time to pass over each of the consecutive 25,600 blocks (assuming 8-bit encoding and calculating 100MB * 1024KB). Let’s say each 4KB block is x many nanometers long and the 7,200rpm takes so long to pass over each one and it takes some 25,600 4KB blocks to contain 100MB data, then:

> Best case scenario:

`9ms + (25,600 * x-many nanoseconds)`

> and worst case scenario is if all 25,600 blocks are fragmented, then:

`(25,600 * 9ms) + (25,600 * x-many nanoseconds)`

> Soooo, an average case... welllllllll, it depends upon whether you mean the mean, median or mode average In short tho, if it takes me more than 20 seconds to copy a 100MB file from one place on my HDD to another, then it is time to upgrade.

> As you commented [in the lecture](https://youtu.be/_ivSbOPoJNk?=49m47s), the answer is resolutely:

> *“IT DEPENDS”*
> --
> --Thomson Comer

:joy:

> To answer the question, "How long on average does it take to read 100MB of data?" I submit:

[HDDseek.js](HDDseek.js)

> This script requires the installation of the "log-update" npm package.

`npm install log-update --save-dev`

> If you have never seen "Rain Man" (1988), then it probably isn't nearly as funny as I think it is.


***
2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?

3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

4. What is the difference between TCP and IP?

5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?


cpu sends read request, time for request to be sent to HD controller
HD controller wants to line up an optimal read path
Is HD in stationary state? Is it spinning yet? Rotational latency
benchmarks
