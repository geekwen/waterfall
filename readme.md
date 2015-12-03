# waterfall plugin

一个简单的瀑布流布局的插件, 支持响应式

# DEMO

http://geekwen.com/waterfall/

# HOWTO

注意!

目标容器需要是 ```position:relative|fixed|absolute``` 这些定位状态才能正确使用!因为子元素是 ```position: absolute``` 定位.

如有需要, 还可以给子元素添加 ```transition``` 详见DEMO

## jQuery 版本

使用该版本前, 需要先引入jQuery

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

# 注意事项

为了达到最好的效果, 烦请注意以下几点:

 1. 为item添加动画时，仅将动画设置到 top，left 上，详见DEMO
 2. 目标容器 padding 为零，item 的 margin 为零。因为本插件会根据 colGapWidth 自动设置间距，而 margin 会干扰计算
 3. 注意容器高度可能会变的场景（如有很多图片的情况），当容器高度有确定值时，计算才准确。若在布局实现后，高度再改变的话，布局就不准确了

# 后续

往后会继续完善, 祝好运
