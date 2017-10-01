# Peripherals

Peripherals live on the front side bus with other fundamental components. Plugging a peripheral in via PCIx, SCSI, or SATA physically locates that device on the system bus. Other devices like USB devices exist on a separate bus from the system bus, but are synchronized with the system bus using a USB controller and a device driver that can translate USB bus messages into system bus messages.

## Network interfaces

Independent processor caches network traffic:

[OSI model](https://en.wikipedia.org/wiki/OSI_model)

Memory address, stack pointer, data transmission rules
Processor communicates asynchronously over network connection in order to satisfy rules of protocol in use - either TCP or UDP.

IP

[Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol)
[Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_protocol_suite)

TCP

[Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

UDP

[User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol)

#### More recommended reading

[Just2Good Description of Networking](http://www.just2good.co.uk/networking.php)

## DMA

[Direct Memory Access](https://en.wikipedia.org/wiki/Direct_memory_access)

### Hard disks

Platter-based hard disks used to be a very interesting subject of research and discussion. Imagine ultra-smooth platters spinning 100 times per second, with binary data encoded on them in sections < 100 nanometers. The hard drive is the most space age piece of equipment in your home.

You can learn about them here:
[Engineer Guy Hard Drive](https://en.wikipedia.org/wiki/File:Harddrive-engineerguy.ogv)

Platter based hard disks have an insane storage cost, less than $0.03 per gigabyte:

[BackBlaze](https://www.backblaze.com/blog/hard-drive-cost-per-gigabyte/)

SSDs are less interesting - they are just flash memory with a controller that engages your system's PCI bus.

## Cyclic Redundancy Checking

### Graphics Accelerators

Dedicated graphics pipelines - hardware designed just for manipulating pixels in an array and updating them in a shared memory used by the display. Separate pipeline from the CPU, again, graphics memory can be written to display without needing to be circled around with the CPU.

#### Shaders

C++ software (gsl, actually) that executes simple mathematics on every vertex simultaneously.

#### Pipeline components

#### Software components

OpenGL, DirectX, WebGL. CUDA, GLSL

#### Onboard memory

# Assignment:

1. The minimum seek time for an HDD is 9msec, and the maximum seek time is 90msec. The block size of this HDD is 4KB. How long on average does it take to read 100MB of data?

2. Describe a TCP/IP packet in detail. Describe the header, how many bytes it is, and which components it contains. What data can come after the header?

3. How does the network protocol guarantee that a TCP/IP packet is complete after transmission?

4. What is the difference between TCP and IP?

5. Why is 3d performance so much higher with a graphics card than without? Modern CPUs are extremely fast, what is limiting their performance?
