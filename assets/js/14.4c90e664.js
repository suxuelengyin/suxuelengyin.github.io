(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("除了用户主动触发的滚动，我们经常需要代码触发滚动。然而浏览器提供的scroll API，并不是完全精确，存在比较多的兼容性。今天我们就来探讨一下，scroll 滚动API 及其兼容性。")]),t._v(" "),s("h2",{attrs:{id:"几个重要的对象和类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几个重要的对象和类"}},[t._v("#")]),t._v(" 几个重要的对象和类")]),t._v(" "),s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[t._v("#")]),t._v(" window")]),t._v(" "),s("p",[t._v("window 对象表示浏览器对象模型，即浏览器提供的扩展API能力。大写的"),s("code",[t._v("Window")]),t._v("是构造函数，小写的"),s("code",[t._v("window")]),t._v("是它实例化后的对象。")]),t._v(" "),s("p",[s("code",[t._v("scrollX")]),t._v("、"),s("code",[t._v("scrollY")]),t._v("、"),s("code",[t._v("pageXOffset")]),t._v(" 和 "),s("code",[t._v("pageYOffset")]),t._v(" 是它的固有属性。这会返回垂直/水平上的滚动距离。")]),t._v(" "),s("blockquote",[s("p",[t._v("返回而非设置，即只读。")])]),t._v(" "),s("p",[t._v("它实现了"),s("code",[t._v("scroll")]),t._v("、"),s("code",[t._v("scrollBy")]),t._v("、"),s("code",[t._v("scrollTo")]),t._v("和"),s("code",[t._v("scrollIntoView")]),t._v("方法。它滚动的是整个文档，内联可滚动元素不会发生滚动。")]),t._v(" "),s("h3",{attrs:{id:"document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" document")]),t._v(" "),s("p",[s("code",[t._v("document")]),t._v("对象表示文档对象模型，是浏览器提供给js操作文档元素的API。 大写的"),s("code",[t._v("Document")]),t._v("是构造函数，小写的"),s("code",[t._v("document")]),t._v("是它实例化后的对象。")]),t._v(" "),s("p",[t._v("document 对象实现了 "),s("code",[t._v("HTMLDocument")]),t._v(" 类。")]),t._v(" "),s("p",[s("code",[t._v("documentElement")]),t._v("和"),s("code",[t._v("body")]),t._v("是它的固有属性。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("documentElement")]),t._v("是只读的，返回文档根元素，在html文档中就是"),s("code",[t._v("<html>")]),t._v("；"),s("code",[t._v("body")]),t._v("是可读可写的。")])]),t._v(" "),s("h3",{attrs:{id:"element"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" Element")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",title:"Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element"),s("OutboundLink")],1),t._v(" 是一个通用性非常强的基类，所有 Document 对象下的对象都继承自它。我们使用元素选择器获取元素时，返回的对象，继承自"),s("code",[t._v("HTMLElement")]),t._v("，而"),s("code",[t._v("HTMLElement")]),t._v("继承自"),s("code",[t._v("Element")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("scrollTop")]),t._v("、"),s("code",[t._v("scrollHeight")]),t._v("、"),s("code",[t._v("scrollLeft")]),t._v(" 和 "),s("code",[t._v("scrollWidth")]),t._v(" 是它的固有属性。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("scrollTop")]),t._v("和"),s("code",[t._v("scrollLeft")]),t._v("可读写；"),s("code",[t._v("scrollHeight")]),t._v("和 "),s("code",[t._v("scrollWidth")]),t._v("只读。")])]),t._v(" "),s("p",[t._v("同时，它也实现了"),s("code",[t._v("scroll")]),t._v("、"),s("code",[t._v("scrollBy")]),t._v("、"),s("code",[t._v("scrollTo")]),t._v("和"),s("code",[t._v("scrollIntoView")]),t._v("方法，控制指定元素的滚动，前提是可以滚动。")]),t._v(" "),s("h2",{attrs:{id:"获取滚动距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取滚动距离"}},[t._v("#")]),t._v(" 获取滚动距离")]),t._v(" "),s("p",[t._v("获取滚动距离的方式比较多。")]),t._v(" "),s("p",[t._v("想要获取根元素的滚动距离，根据上面的介绍，比较简单：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("pageYOffset 和 scrollY 时等价的，建议使用pageYOffset。")])]),t._v(" "),s("p",[t._v("非根元素的滚动距离，根据Element元素类的属性：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("确保你选中了滚动容器。")])]),t._v(" "),s("p",[t._v("所以，很多框架里面是这么获取滚动距离的：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" elememt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("利用Element没有"),s("code",[t._v("pageYOffset")]),t._v("属性，可以返回根元素或非根元素的滚动距离。")]),t._v(" "),s("p",[t._v("你会发现，无论何种方法，"),s("strong",[t._v("返回的滚动距离总是整数")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"设置滚动距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置滚动距离"}},[t._v("#")]),t._v(" 设置滚动距离")]),t._v(" "),s("p",[t._v("设置滚动距离只需要从第一个小节中，使用可写的属性即可达到目的。")]),t._v(" "),s("p",[t._v("如果你想设置根元素，有两种途径，设置document或者window的滚动。设置document的滚动：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("或者：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这样即可让页面产生滚动。")]),t._v(" "),s("p",[t._v("那么问题来了，window对象上没有可写的滚动属性，怎么办？只能用方法来实现：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("以上两种方法产生的效果时一致的！")]),t._v(" "),s("p",[t._v("非根元素的滚动距离设置，同document的设置方法：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("或者：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("blockquote",[s("p",[t._v("scrollTo 和 scroll 是等同的，scrollTo 是绝对滚动，即滚动至。scrollBy 是相对滚动，即滚动一定距离。")])]),t._v(" "),s("p",[t._v("你会发现，无论何种方法，"),s("strong",[t._v("设置滚动距离时，生效的总是设置值的整数部分")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"平滑滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平滑滚动"}},[t._v("#")]),t._v(" 平滑滚动")]),t._v(" "),s("p",[t._v("上面的方法都是突兀的滚动，用户体验比较差，更多时候我们需要平滑的滚动。")]),t._v(" "),s("h3",{attrs:{id:"浏览器api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器api"}},[t._v("#")]),t._v(" 浏览器API")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ScrollToOptions",title:"ScrollToOptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("ScrollToOptions"),s("OutboundLink")],1),t._v("用于指定一个元素应该滚动到哪里，以及滚动是否应该平滑。")]),t._v(" "),s("p",[t._v("作用范围：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("Window.scroll()")])]),t._v(" "),s("li",[s("code",[t._v("Window.scrollBy()")])]),t._v(" "),s("li",[s("code",[t._v("Window.scrollTo()")])]),t._v(" "),s("li",[s("code",[t._v("Element.scroll()")])]),t._v(" "),s("li",[s("code",[t._v("Element.scrollBy()")])]),t._v(" "),s("li",[s("code",[t._v("Element.scrollTo()")])])]),t._v(" "),s("p",[s("code",[t._v("ScrollToOptions.behavior")]),t._v(" 指定滚动是否应该平滑进行，还是立即跳到指定位置。例如：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrollTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("top")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("behavior")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smooth'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("这会平滑的滚动至100，而非突然滚动。")]),t._v(" "),s("p",[s("strong",[t._v("然而，该参数在safair上并不支持。")])]),t._v(" "),s("p",[t._v("为了实现兼容性的平滑滚动，你需要自己实现这个平滑的滚动过程。幸好，该参数有polyfill: "),s("a",{attrs:{href:"https://www.npmjs.com/package/smoothscroll-polyfill",title:"smoothscroll-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("smoothscroll-polyfill"),s("OutboundLink")],1),t._v("。引入之后，有关滚动的API，都会支持平滑参数。")]),t._v(" "),s("h3",{attrs:{id:"smoothscroll-polyfill-的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smoothscroll-polyfill-的原理"}},[t._v("#")]),t._v(" smoothscroll-polyfill 的原理")]),t._v(" "),s("h4",{attrs:{id:"判断是否支持-behavior"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断是否支持-behavior"}},[t._v("#")]),t._v(" 判断是否支持 behavior")]),t._v(" "),s("p",[s("code",[t._v("'scrollBehavior' in document.documentElement.style")])]),t._v(" "),s("p",[t._v("巧妙的使用scrollBehavior的样式有无，来判断。实际上，很多API的兼容性，都可以用类似的方法。")]),t._v(" "),s("h4",{attrs:{id:"覆写原型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆写原型"}},[t._v("#")]),t._v(" 覆写原型")]),t._v(" "),s("p",[t._v("覆写了以下原型：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("window.scroll()")]),t._v("、"),s("code",[t._v("window.scrollTo()")])]),t._v(" "),s("li",[s("code",[t._v("window.scrollBy()")])]),t._v(" "),s("li",[s("code",[t._v("Element.prototype.scroll")]),t._v("、"),s("code",[t._v("Element.prototype.scrollTo")])]),t._v(" "),s("li",[s("code",[t._v("Element.prototype.scrollBy")])]),t._v(" "),s("li",[s("code",[t._v("Element.prototype.scrollIntoView")])])]),t._v(" "),s("h4",{attrs:{id:"平滑滚动-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平滑滚动-2"}},[t._v("#")]),t._v(" 平滑滚动")]),t._v(" "),s("p",[t._v("在不支持的情况下，写一个自定义的平滑滚动的实现"),s("code",[t._v("smoothScroll")]),t._v("。它的原理是：")]),t._v(" "),s("p",[t._v("计算出待滚动的距离distance，并给出一个合理的滚动时间t，即要在t时间内，平滑的滚动完distance。平滑的实现是通过每次滚动一点距离，直到滚动完成。每次滚动的距离是通过计算得出的，计算函数采用的是缓动函数：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("y = (1-cos(πx))/2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("定义域和值域都是[0, 1]。")]),t._v(" "),s("p",[t._v("它的函数曲线图如下：\n"),s("img",{attrs:{src:"https://www.suxuewb.cn/wp-content/uploads/2021/09/%E6%88%AA%E5%B1%8F2021-09-07-17.24.14.png",alt:""}})]),t._v(" "),s("p",[t._v("通过曲线的斜率，我们可以看出，动画是缓慢启动，缓慢结束。有点像easeInOut淡入淡出。")]),t._v(" "),s("p",[t._v("每次滚动是通过递归"),s("code",[t._v("step")]),t._v("函数实现的，递归的触发条件是，滚动的距离未达到目标值。其函数源码如下：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("step")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" currentY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" elapsed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SCROLL_TIME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// avoid elapsed times higher than one")]),t._v("\n      elapsed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elapsed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" elapsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// apply easing to elapsed time")]),t._v("\n      value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ease")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elapsed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      currentX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      currentY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" currentY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scroll more if we have not reached our destination")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentX "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" currentY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("step")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[t._v("其中 "),s("code",[t._v("ease (elapsed )")]),t._v("，是根据已消耗的时间比例，计算缓动函数值，然后再乘以总滚动距离，得出此时刻应该滚动的距离。")]),t._v(" "),s("p",[t._v("其滚动事件通过requestAnimationFrame触发，不影响UI渲染。")]),t._v(" "),s("h2",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),s("p",[t._v("由于滚动方法会舍去小数点的部分，滚动像素会出现误差，误差并不大，绝大部分情况无影响。smoothscroll-polyfill 能解决大部分场景。")])])}),[],!1,null,null,null);s.default=e.exports}}]);