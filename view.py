# -*- coding: utf-8 -*-
 
from flask import Flask, render_template, jsonify, make_response
from flask_bower import Bower
from frag2text import frag2text

__author__ = "siznax"
__date__ = "Mar 2015"

app = Flask(__name__)
Bower(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info/<path:url>')
def info(url):
    try:
        thing = url.split('/')[-1]
        url = url.replace(' ','_')
        if not url.startswith('http'):
            url = 'http://wikipedia.org/wiki/' + thing
        xpath = '//*[@id="mw-content-text"]/p[1]'
        html = frag2text(url, 'xpath', xpath, raw=True)
        html = html.replace('<p>', '<p>' + thing)
        html = html.replace('<a', '<span').replace('</a>', '</span>')
        insert = (' <a target=_blank'
                  ' href="%s">%s</a></pre></p>' % (url, url))
        html = html.replace('</p>', insert)
        return jsonify(result=html)
    except Exception as detail:
        return jsonify(result="&#x2602; Sorry, no info for %s" % thing)

if __name__ == "__main__":
    app.run(port=5006, debug=True)
    

