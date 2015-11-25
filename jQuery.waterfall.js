;(function ($) {
    /**
     *
     * @param param Object
     *
     *    param.item: selector, //子元素的 class 或者元素
     *    param.colMinWidth: 320, //每列的最小宽度
     *    param.colGapWidth: 20, //每项之间的距离
     *    param.autoResize: true
     *
     *
     */

    $.fn.waterfall = function (param) {
        // 初始化默认值
        if (!param) param = {};

        var itemSelector = param.item || "div",
            colMinWidth = param.colMinWidth || 320,
            colGapWidth = param.colGapWidth || 20,
            autoResize = param.autoResize || false,
            $wrapper = $(this),
            $item = $wrapper.children(itemSelector);

        action();

        if (autoResize) {
            var _timer = {};
            // 减少重复调用次数
            function delay_till_last(id, fn, wait) {
                if (_timer[id]) {
                    window.clearTimeout(_timer[id]);
                    delete _timer[id];
                }

                return _timer[id] = window.setTimeout(function () {
                    fn();
                    delete _timer[id];
                }, wait);
            }

            $(window).resize(function () {
                delay_till_last("resize", action, 500);
            });
        }

        function action() {
            var wrapWidth = $wrapper.width(),
                columnCount = Math.floor(wrapWidth / colMinWidth),
                colWidth,
                columns = [];

            if (columnCount < 1) columnCount = 1;
            colWidth = (wrapWidth - (columnCount - 1) * colGapWidth) / columnCount;
            $item.css({"position": "absolute", "width": colWidth});

            for (var i = 0; i < columnCount; i++) {
                columns[i] = 0;
            }

            $item.each(itemEach);

            function itemEach() {
                var $this = $(this),
                    thisHeight = $this.outerHeight(),
                    colMinHeight = Math.min.apply(Math, columns),
                    colMinHeightIndex = columns.indexOf(colMinHeight);

                $this.css({"top": colMinHeight, "left": colMinHeightIndex * (colWidth + colGapWidth)});
                columns[colMinHeightIndex] += parseInt(thisHeight) + colGapWidth;

                $this = null;
            }

            $wrapper.css("height", Math.max.apply(Math, columns));
        }
    };
})(window.jQuery);