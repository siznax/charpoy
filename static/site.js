/**
 * siznax 2015
 */

var DEBUG = false;
var VERBOSE = true;

/**
 * expects a shuffled array of chars
 */
var Charpoy = function(data) {
    this.pxWidth = 32;
    this.nCols = 0;
    this.nRows = 0;
    this.data = data;
    this.DEBUG = DEBUG;
    this.opacity = [0.1, 0.3, 0.5, 0.7];
    this.bg_color = wombat['bg'];
    this.cell_a_color = wombat['green+1'];
    this.cell_hover_a_color = wombat["blue"];
    this.clicked_color = wombat['orange+2'];
    if (this.DEBUG) {
        console.log(this.data);
    }
};

Charpoy.prototype.show_debug = function() {
    var dims = '(' + $(window).width() + 'x' + $(window).height() + ')';
    var cells = ' [' + this.nCols + ', ' + this.nRows + ']';
    var ncells = ' ' + this.nCols * this.nRows + ' cells';
    var chars = ' ' + this.data.length + ' chars';
    $("div#console").html('debug: ' + dims + cells + ncells + chars);
};

Charpoy.prototype.show_verbose = function() {
    var ncells = this.nCols * this.nRows;
    var nchars = this.data.length;
    $("div#console").html("<span id=title>चारपाई</span> showing " +
                          ncells + "/" + nchars + " (resize for more/less)");
};

Charpoy.prototype.update = function() {
    this.nCols = Math.floor($(window).width() / this.pxWidth) - 2;
    this.nRows = Math.floor($(window).height() / this.pxWidth) - 2;
    if (this.DEBUG) {
        this.show_debug();
    }
    this.show_verbose();
    if (this.VERBOSE) {
    }
}

Charpoy.prototype.append = function(tag, _id, _cls, content) {
    var href = "http://wikipedia.org/wiki/" + content;
    var html = '<a href="' + href + '">' + content + '</a>';
    var div = '<' + tag + ' id="' + _id + '" class="' + _cls + '">';
    div = div + html + '</' + tag + '>';
    if (this.DEBUG) {
        console.log(div);
    }
    $("div#view").append(div);
}

Charpoy.prototype.position = function(_id) {
    $("div#" + _id)
        .css('left', _id.split('_')[1] * this.pxWidth)
        .css('top', _id.split('_')[0] * this.pxWidth);
}

Charpoy.prototype.choice = function(arr) {
    var max = arr.length - 1;
    var ind = Math.round(Math.random() * (max - 0) + 0);
    return arr[ind];
}

Charpoy.prototype.style = function(_id) {
    $("div#" + _id)
        .css('opacity', this.choice(this.opacity));
}

Charpoy.prototype.fill = function() {
    var rows = this.nRows;
    var cols = this.nCols;
    var count = 0;
    for(i=0; i < rows; i++) {
        for(j=0; j < cols; j++) {
            if (this.data[count] === undefined) {
                count = 0;
            }
            var val = this.data[count];
            var _id = i + '_' + j;
            this.append('div', _id, 'cell', val);
            this.position(_id);
            this.style(_id);
            count = count + 1;
        }
    }
}

$(function() {
    $.getScript("/static/data.js", function() {
        var chars = new Chars();
        var poy = new Charpoy(chars.all());
        poy.update();
        poy.fill();

        // $( window ).resize(function() {
        //     poy.update();
        //     poy.fill();
        // });

        $(document).on("mouseenter", "div.cell", function() {
            if ($(this).hasClass("clicked")) {
                return false;
            }
            $(this).stop();
            $(this).css('opacity', 1.0);
            $(this).css('background', 'black');
            $('a', this).css('color', poy.cell_hover_a_color);
        });

        $(document).on("mouseleave", "div.cell", function() {
            if ($(this).hasClass("clicked")) {
                return false;
            }
            $(this).fadeTo("slow", 0.5, function() {
                $('a', this).css('color', poy.cell_a_color);
                $(this).css('background', 'none');
                $(this).css('opacity', 1.0);
            });
        });

        function interrupt(obj) {
            event.preventDefault();
            obj.stop();
            $("div.cell").stop();
            $("div#intro").remove();
            $("div#info").remove();
        }
        
        function mute_cells(obj) {
            $("div.cell").css('background', poy.bg_color);
            $("div.cell a").css('color', 'black');
        }

        function mark_clicked(obj) {
            obj.css('color', poy.clicked_color);
            obj.parent().css('background', 'black');
            $("div#" + obj.parent().attr("id")).addClass("clicked");
        }

        function swap_cells(obj) {
            var a_id = obj.parent().attr('id');
            var a_col = a_id.split('_')[1];
            var a_top = obj.parent().css('top');
            
            var b_id = '0_' + a_col, b_col;
            var b_top = $('div#' + b_id).css('top');

            var a = $('div#' + a_id);
            var b = $('div#' + b_id);

            a.animate({'top': b_top})  // a.css('top', b_top);
            b.css('top', a_top);

            a.attr('id', b_id);
            b.attr('id', a_id);
        }
        
        function append_modal(obj) {
            $("body").append('<div id=info_layer></div>');
            $("div#info_layer").append(
                '<div id=info>'
                    + 'Getting info on ' + obj.text()
                    + ' ...'
                    + '</div>');
        }
        
        function get_info(href) {
            var url = "/info/" + href;
            if (DEBUG) {
                console.log("GET " + url);
            }
            var request = $.ajax({url: url});
            request.done(function(data) {
                if (DEBUG) { console.log(data.result); }
                $("div#info").html(data.result);
            });
            request.fail(function() {
                var href = this.url.split('/info/').pop();
                var thing = href.split('/').pop();
                var link = '<a href="' + href + '" target=_blank>' + thing + '</a>';
                var msg = "Failed to get info on " + link;
                $("div#info").html(msg);
            });
            request.always(function() {
            });
        };

        $(document).on("click", "div.cell a", function() {
            interrupt($(this));
            mute_cells($(this));
            mark_clicked($(this));
            swap_cells($(this));
            append_modal($(this));
            get_info($(this).attr("href"))
        });

        $(document).on("click", "div#info_layer", function() {
            $("div.cell a").stop();
            $(this).remove();
            $("div#info_layer").remove();
            $("div.cell a").css('color', poy.cell_a_color);
            $("div.clicked a").css('color', poy.clicked_color);
        });
        
    });
});
