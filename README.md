This seemed like a fun use for a python module I wrote
([frag2text](https://pypi.python.org/pypi/frag2text)). I started by
selecting a subset of Unicode that I thought might have interesting
Wikipedia articles and rendered okay on Mac OS X (~1800) but that’s
missing a lot of good articles.

So I’m looking at stuff like, what is the list of single character
Wikipedia article titles? That’s a really fine subset of Unicode
(23K/110K) but it’s full of characters that may not render well, and
duplicates (or redirects).

In the future, I’ll want to find the subset of single-character
Wikipedia titles that have unique articles. Then, I’ll want to cut out
characters that may not render well, and then truncate sets that are
over-represented in a small random selection. Now I'm learning about
all kinds of [fascinating Unicode
scripts](http://en.wikipedia.org/wiki/Script_%28Unicode%29)... 

Feel free to contribute!


TODO
====

* Backfill rendering scripts in Category:Unicode_blocks


UPDATES
=======

2015-04-24
----------

* Added "Mahjong Tiles (Unicode block)"
* Added "Hangul_Jamo_(Unicode_block)"
* Added "Alchemical Symbols (Unicode block)"
* Reconciled extant blocks with <http://en.wikipedia.org/wiki/Category:Unicode_blocks> in chars.js
* Implemented "/about" endpoint
* Moved character data into JSON data file (chars.js)

@siznax
