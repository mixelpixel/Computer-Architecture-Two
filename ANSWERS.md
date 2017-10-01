# Assignment:

## QUESTON: 1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

One way to figure an answer to *“How long on average does it take to read 100MB of data?“* would be to consider the average seek time for modern HDD’s (which per the wiki article seems more like in the range of 9ms) and then consider the range of cases where only one seek is needed when all the 4KB blocks are consecutive versus the number of seeks when *each and every* block is scattered about the disk…

Oh... and I suppose the 100MB isn’t necessarily for just one file... Considering that in all likelihood, each of the files comprising the 100MB of data are likely to be consecutive, even if the files aren't... we'd have to figure a probability for how many files likely constitute the sum total 100MB... Of those files, are they all written in consecutive blocks, or fragmented about the drive?

Another factor is the rotational latency and the state of the drive at the time of request. Is the drive at rest, or, currently at speed (e.g. 7200rpm). If at speed, how far is the head from the position of the starting block? If not at speed, how long until the drive is at an operational speed? On average, is the drive brand new or likely years past it's warrantied behavior tolerances?

Best case scenario, if the drive is at speed, and currently at the initial block, and there is one consecutively blocked 100MB file... It would take all of 0ms for the read head to seek to the initial block. From there read time would be a matter of how long the spinning disk takes to pass all of the consecutive sectors under the read head. Let's say, however, that it takes at least one single average seek of 9ms. Given this, calculating the best case scenario would be the sum of the one average seek time and the amount of time to pass over each of the consecutive 25,600 blocks (assuming 8-bit encoding and calculating 100MB at 1024KB). To calculate the time needed to read in all that data, let’s imagine each 4KB block is x many nanometers long and the 7,200rpm takes y-many nanoseconds long to pass over each block. If it takes some 25,600 4KB blocks to contain 100MB data, then:

Best case scenario:

`9ms + (25,600 * y-many nanoseconds)`

and worst case scenario is if all 25,600 blocks are fragmented, then:

`(25,600 * 9ms) + (25,600 * y-many nanoseconds)`

Soooo, an average case... welllllllll, it depends upon whether you mean the mean, median or mode average of seek time, the mean median or mode average of how fragmented the data is on the drive, the rotational speed of the drive (7,200rpm rated drives are fairly common, tho maybe 5,400 is average) and marginal considerations of rotational latency and such. Practically tho, if it takes more than 20 seconds to copy a 100MB file from one place on my HDD to another, then as of October 2017, it is time for an upgrade cuz on my lappy, copying 100MB from the SSD internal drive to an external SSD over USB3 is next to instantaneous.

As you commented [in the lecture](https://youtu.be/_ivSbOPoJNk?=49m47s), the answer is resolutely:

> *“IT DEPENDS”*
> --
> --Thomson Comer

:joy:

To answer the question, "How long on average does it take to read 100MB of data?" I submit:

[HDDseek.js](HDDseek.js)

This script requires the installation of the "log-update" npm package.

`npm install log-update --save-dev`

*(If you have never seen "Rain Man" (1988), then it probably isn't nearly as funny as I think it is.)*

***
## QUESTON: 2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?



***
## QUESTON: 3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

***
## QUESTON: 4. What is the difference between TCP and IP?

Both the Tansmission Control (TCP) and Internet (IP) protocols are aspects of the Open Systems Interconnection model (OSI). Within this 7 layered model, TCP (along with UDP) is part of the fourth layer and IP is part of the third. When there are active processes on either end of a networked connection, Transmission Control Protocol normalizes the dialogging between the boundaries of pertinent processes on either end. Internet Protocol normalizes the dialogue between either device. Both protocols handle errors. Whereas the IP address is used to send "packets" to a particular IP address, the TCP port guarantees an unordered stream of packets will be organized according to the segment of data which is comprised of ordered packets.

***
## QUESTON: 5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?

***
*fin.*
