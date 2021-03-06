# -*- coding: utf-8 -*-

import itertools
import json
import logging
import os
import sys

from flask import Flask, render_template, jsonify, request
from flask_bower import Bower
from frag2text import frag2text

__author__ = "siznax"
__date__ = "Mar 2015"

app = Flask(__name__)
Bower(app)

app.logger.addHandler(logging.StreamHandler(sys.stdout))
app.logger.setLevel(logging.ERROR)

# settings.py
APP_PATH = os.path.dirname(os.path.abspath(__file__))


@app.route('/about')
def about():
    data_file = os.path.join(APP_PATH, 'static/chars.js')
    with open(data_file) as json_file:
        data = json.load(json_file)
        _list = [data[x]['chars'].split(' ') for x in data]
        chain = itertools.chain.from_iterable(_list)
        nchars = len(list(chain))
        return render_template('about.html',
                               nchars=nchars,
                               nblocks=len(data),
                               data=data)


@app.route('/info/<path:url>')
def info(url):

    try:
        thing = url.split('/')[-1]
        url = url.replace(' ', '_')
        if not url.startswith('http'):
            url = 'http://wikipedia.org/wiki/' + thing

        xpath = '//*[@id="mw-content-text"]/p[1]'
        html = frag2text(url, 'xpath', xpath, raw=True)
        html = html.replace('<p>', '<p><div id=charpoy>' + thing + '</div>')
        html = html.replace('<a', '<span').replace('</a>', '</span>')
        insert = (' <a target=_blank href="%s">%s</a></p>' % (url, url))
        html = html.replace('</p>', insert)

        return jsonify(result=html)

    except Exception:
        link = '<a target=_blank href="%s">%s</a>' % (url, thing)
        return jsonify(result="&#x2602; Sorry, no info for %s" % link)


@app.route('/')
def index():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(port=5006, debug=True)
