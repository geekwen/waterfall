# waterfall plugin

一个简单的瀑布流布局的插件, 支持响应式

# HOWTO

注意!

目标容器需要是 ```position:relative|fixed|absolute``` 这些定位状态才能正确使用!因为子元素是 ```position: absolute``` 定位.
 
如有需要, 还可以给子元素添加 ```transition``` 

# DEMO

http://geekwen.com/waterfall/

## jQuery 版本

使用改版本前, 需要先引入jQuery

使用方式:

```
// targetElement 目标容器

$(targetElement).waterfall({
    item: "div", // String 子元素的选择器,默认是 div
    colMinWidth: 320, // Nunber 每一列的宽度, 默认是 320
    colGapWidth: 20, // Number 列之间的宽度, 默认是 20
    autoResize: false // Bool 是否自动响应容器宽度, 默认为 false
});

```

目前仅支持如上几个参数.

最简单的使用方式就是:

```
$(targetElement).waterfall();
```

# 后续

往后会继续完善, 祝好运