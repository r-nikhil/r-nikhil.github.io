---

layout: post
title: Preparing for Paradigm CTF

---

Paradigm(the web3 VC fund) is organising a [CTF](https://ctftime.org/ctf-wtf/) competition on 20th Aug. The challenges would be set around exploiting weaknesses in smart contract security and basic cryptography. While I used to play these regularly back in 2016-17, I've totally lost touch and forgot almost everything. 

[Link to register for the CTF](https://ctf.paradigm.xyz/)

In preparation, I decided to brush up my basic crypto skills and attempt the famous [cryptopals](https://cryptopals.com/) challenges again. The Matasano crypto challenges are a set of 48 practical programming exercises that [Thomas Ptacek](https://twitter.com/tqbf) and his team at Matasano Security have developed as a kind of teaching tool. 

This post discuss possible solutions for the first set of problems
These are my solution to the first set of 3 problems which are:

* Convert hex to base64
* Fixed XOR
* Single-byte XOR cipher


I have linked the problem's actual page in the headings. Read them before going to the solution which can found on my Github. I also suggest that you solve these on your own first before looking at solutions. 

1) [Convert hex to base64](https://cryptopals.com/sets/1/challenges/1)

What we are initially given is a hexadecimal representation of the binary data which can be converted to raw bytes using the binascii module's unhexlify function. Now that we have the raw bytes, we just need to use base64 encoding to represent them and then convert to string for comparing with the solution. 

2) [Fixed XOR](https://cryptopals.com/sets/1/challenges/2)

Strings in Python 3 are unicode objects. Converting the strings to base 16 integers, XORing them, then converting back gives us the solution

3) [Single-byte XOR cipher](https://cryptopals.com/sets/1/challenges/3)

We are again given an hex encoded string but this time, it has already been XOR'd against a single character. The Goal is to find the key and decrypt the message. 

The first challenges were mainly warm ups and this one actually involves breaking a (simple) cipher. We could brute force it but as suggested in the challenges page, let's use character frequency as a metric to break this. I found  a statistical distribution for English text [here](http://www.data-compression.com/english.html). Since this XOR operation modifies modifies each byte by the same amount, the frequency distribution won't change. 

I got some errors while decodes bytes objects into 'utf-8' but when I set it to ignore, I nevertheless got the answer. I should look into this again.

-----

I am working on launching PLO (my favourite poker variant) at my day job and its getting hard to find time to work on these. Will update this post with more solutions as and when I have time to attempt them.

EDIT: I got sick and didn't play the CTF.