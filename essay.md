# Assignment:

1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

- QUESTION: what is the relationship between seek time and read time?

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

> 1,267,200 milliseconds => 1,267.2 seconds / 60 => *21.12 MINUTES* of *seek* time.

```js
> ((((100 * 1024 * 1024 * 8) / 32768) * 49.5) / 1000) / 60
21.12
```

> that seems like a long time. Still not sure about *read* time in addition to (?) seek time.

> *21 minutes and 5 seconds*

2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?

3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

4. What is the difference between TCP and IP?

5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?
