#!/usr/bin/env python
"""
Operate on the list of Wikipedia article titles available at:
    http://dumps.wikimedia.org/enwiki/latest/
Specifically, 
    enwiki-latest-all-titles.gz
"""

import argparse
import gzip
import datetime
import sys

__author__ = "siznax"
__date__ = "Mar 2015"


class UniPedia:

    TRUNCATE_COUNT = 30

    def __init__(self, gzfile, test, verbose=False):
        self.gzfile = gzfile
        self.test = test
        self.verbose = verbose
        self.start = now()

    def naive_find(self, term):
        start = now()
        with gzip.open(self.gzfile) as fh:
            for num, line in enumerate(fh):
                try:
                    if line.strip() == term:
                        sys.stdout.write("+ %s %d %d seconds\n"
                                         % (term, num, now(start)))
                        return
                except UnicodeWarning:
                    pass
        sys.stdout.write("- %s %d %d seconds\n" % (term, num, now(start)))


def now(start=None):
    """returns Unix time in seconds or seconds since start"""
    sec = int(datetime.datetime.now().strftime('%s'))
    if start:
        return sec - start
    return sec


def main(args):
    chars = set()
    up = UniPedia(args.gzfile, args.test, args.verbose)

    if args.action == 'find':
        for var in [unichr(x) for x in range(0x040, 0x050)]:
            up.naive_find(var)

    if args.action == 'reduce':
        with gzip.open(up.gzfile) as fh:
            count = 0
            for line in fh:
                char = line.strip().decode('utf-8')
                if len(char) == 1:
                    if count and (count % 10) == 0:
                        sys.stderr.write("  %d chars %d seconds\n" %
                                         (count, now(up.start)))
                    if char not in chars:
                        chars.add(char)
                        sys.stdout.write(line.strip() + ' ')
                        sys.stdout.flush()
                    count += 1
                if up.test and count >= up.TRUNCATE_COUNT:
                    break
            sys.stderr.write("\nFound %d chars %d uniq %d seconds" %
                             (count, len(chars), now(up.start)))


if __name__ == "__main__":
    argp = argparse.ArgumentParser()
    argp.add_argument("gzfile", help="Wikipedia dump gzip file")
    argp.add_argument("action", choices=['find', 'reduce'])
    argp.add_argument("-t", "--test", action="store_true",
                      help="truncate output")
    argp.add_argument("-v", "--verbose", action="store_true",
                      help="verbose output")
    main(argp.parse_args())
