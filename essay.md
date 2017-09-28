# Assignment:

1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

QUESTION: what is the relationship between seek time and read time?

Calculations in bits:

> average seek time = (9 + 90) / 2 => 49.5 milliseconds

> block size in Bytes: 4 * 1024 = 4096 Bytes

> block size in bits (presuming 8-bit bytes): 4096 * 8 = 32,768 bits

- QUESTION: number of blocks to contain 100MB of data?
> Number of bits: 100MB * 1024 = 102,400KB * 1024 = 104,857,600B (* 8 = 838,860,800 bits)

> Number of blocks in 100MB = 838,860,800 bits (100MB) / 32,768 bits (block size)

```js
> (100 * 1024 * 1024 * 8) / 32768
25600
```
> ANSWER: 25,600 blocks

- QUESTION: How long on average does it take to read 100MB of data?
> 25,600 blocks * avg 49.5 milliseconds = 1,267,200 milliseconds

> 1,267,200 milliseconds => 1,267.2 seconds / 60 => *21.12 MINUTES* of *seek* time. **???**

```js
> ((((100 * 1024 * 1024 * 8) / 32768) * 49.5) / 1000) / 60
21.12
```

> that seems like a long time. Still not sure about *read* time in addition to (?) seek time.

> *21 minutes and 5 seconds*

> IF and ONLY IF each 4KB is NON-CONSECUTIVE

:thinking_face:

> I guess one way to figure an answer to *“How long on average does it take to read 100MB of data?“* would be to consider the average seek time for modern HDD’s (which per the wiki article seems more like in the range of 9ms) and then consider the range of cases where only one seek is needed when all the 4KB blocks are consecutive versus the number of seeks when *each and every* block is scattered about the disk…

> Oh.. and I guess the 100MB isn’t necessarily for just one file… Considering that in all likelihood, that each of the files comprising the 100MB are likely to be consecutive, even if the files aren't... we'd have to figure a probability for how many files constitute the sum total 100MB...

> In short, like @thomcom commented in the lecture, the answer is resolutely:

> *“IT DEPENDS”*
> --
> --Thomson Comer

:joy:

2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?

3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

4. What is the difference between TCP and IP?

5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?
