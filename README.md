This seemed like a fun use for a python module I wrote
([frag2text](https://pypi.python.org/pypi/frag2text)). I started by
selecting a subset of Unicode that I thought might have interesting
Wikipedia articles and rendered okay on Mac OS X (~1800) but that’s
missing a lot of interesting articles. So I’m looking at stuff like,
what is the list of single character Wikipedia article titles?
<https://archive.org/details/unipedia> That’s a really interesting
subset of Unicode (23K/110K) but it’s full of characters that may not
render well and duplicates (or redirects). So, I’ll want to find
the subset of single-character Wikipedia titles that have unique
articles. Then, I’ll want to cut out characters that may not render
well, and then truncate sets that are too dominant in a small random
selection. Now I'm learning about all kinds of [interesting Unicode 
scripts](http://en.wikipedia.org/wiki/Script_%28Unicode%29). This
could go on for a while... feel free to contribute!
