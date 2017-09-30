# Assignment:

1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

QUESTION: what is the relationship between seek time and read time?

Calculations in bits:

> average seek time = (9 + 90) / 2 => 49.5 milliseconds
> block size in Bytes: 4 * 1024 = 4096 Bytes
> block size in bits (presuming 8-bit bytes): 4096 * 8 = 32,768 bits

QUESTION: number of blocks to contain 100MB of data?
> Number of bits: 100MB * 1024 = 102,400KB * 1024 = 104,857,600B (* 8 = 838,860,800 bits)
> Number of blocks in 100MB = 838,860,800 bits (100MB) / 32,768 bits (block size)
```js
> (100 * 1024 * 1024 * 8) / 32768
25600
```
> ANSWER: 25,600 blocks

QUESTION: How long on average does it take to read 100MB of data?
> 25,600 blocks * avg 49.5 milliseconds = 1,267,200 milliseconds
> 1,267,200 milliseconds => 1,267.2 seconds / 60 => *21.12 MINUTES* of *seek* time. **???**
```js
> ((((100 * 1024 * 1024 * 8) / 32768) * 49.5) / 1000) / 60
21.12
```
> that seems like a long time. Still not sure about *read* time in addition to (?) seek time.
> *21 minutes and 5 seconds*
> ***IF and ONLY IF each 4KB is NON-CONSECUTIVE***

:thinking_face:

NOTE: ***IFF each 4KB block is NON-CONSECUTIVE && the AVERAGE seek time is 9ms***
Use this [HDD seek simulator script](HDDseek.js) to analyze the simulate the theoretical boundary and comapre it to a practical test case
> "In THEORY it only takes 230.4 seconds to seek 100MB of HDD data while
> constrained to 4KB blocks and an average seek time of 9 milliseconds.

> In PRACTICE, it took roughly 258.405510504 seconds. Yeah... 258.41. . .
> Yeah, yeah, about 258. M-hmm...258.405510504 seconds. Yeah. 258. . . 258.4.
> ...and 9 milliseconds per seek? Ah, 9. . . more like 10. 10.0939652540625 milliseconds.
> Yeah, definitely 10.0939652540625 milliseconds, definitely per seek, 10.1 seconds.

> BAD BABY - HOT WATER!! BAD BABY - HOT WATER!!!!"

> -- "Raymond Babbit" as played by Dustin Hoffman (1998, "Rain Man")

NOTE:
I guess one way to figure an answer to *“How long on average does it take to read 100MB of data?“* would be to consider the average seek time for modern HDD’s (which per the wiki article seems more like in the range of 9ms) and then consider the range of cases where only one seek is needed when all the 4KB blocks are consecutive versus the number of seeks when *each and every* block is scattered about the disk…

Oh.. and I guess the 100MB isn’t necessarily for just one file… Considering that in all likelihood, that each of the files comprising the 100MB are likely to be consecutive, even if the files aren't... we'd have to figure a probability for how many files constitute the sum total 100MB...

In short, like @thomcom commented [in the lecture](https://youtu.be/_ivSbOPoJNk?=49m47s), the answer is resolutely:

> *“IT DEPENDS”*
> --
> --Thomson Comer

:joy:

> How long on average does it take to read 100MB of data?


Well, we’ll also need to consider, how many files constitute the 100MB…
Of those files, are they all written in consecutive blocks, or fragmented about the drive?

Best case scenario, one consecutively blocked 100MB file would take 9ms for the read head to seek to, on a 7,200rpm drive, let’s say each 4KB block is x many nanometers long and the 7,200rpm takes so long to pass over each one and it takes some 25,600 4KB blocks to contain 100MB data, then

`9ms + (25,600 * x-many nanoseconds)` = best case scenario….

and worst case scenario is is all 25,600 blocks are fragmented, then…

`(25,600 * 9ms) + (25,600 * x-many nanoseconds)` = worst case scenario….

Soooo…. an average case… welllllllll, if it takes me more than 20 seconds to copy a 100MB file from one place on my HDD to another, then it is time to upgrade :stuck_out_tongue:

***
2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?

3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

4. What is the difference between TCP and IP?

5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?


cpu sends read request, time for request to be sent to HD controller
HD controller wants to line up an optimal read path
Is HD in stationary state? Is it spinning yet? Rotational latency
benchmarks
