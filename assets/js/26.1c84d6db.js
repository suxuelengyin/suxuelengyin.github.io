(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{348:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("在js中，想要将对象转换成原始值，必然会调用toPrimitive()内部函数，那么它是如何工作的呢？\n该函数形式如下：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPrimitive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("preferedType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("input是输入的值，preferedType是期望转换的类型，他可以是字符串，也可以是数字。\n如果转换的类型是number，会执行以下步骤：")]),t._v(" "),s("ol",[s("li",[t._v("如果input是原始值，直接返回这个值；")]),t._v(" "),s("li",[t._v("否则，如果input是对象，调用input.valueOf()，如果结果是原始值，返回结果；")]),t._v(" "),s("li",[t._v("否则，调用input.toString()。如果结果是原始值，返回结果；")]),t._v(" "),s("li",[t._v("否则，抛出错误。")])]),t._v(" "),s("p",[s("strong",[t._v("如果转换的类型是String，2和3会交换执行，即先执行toString()方法。")]),t._v("\n你也可以省略preferedType，此时，日期会被认为是字符串，而其他的值会被当做Number。")]),t._v(" "),s("p",[t._v("综上所述，会有以下计算结果：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("加号操作符会将preferedType看成Number，调用ES内部的toPrimitive(input，Number)方法，得到空字符串")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[object Object]"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("最终会调用双方的toString()方法，再做字符串加法")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("但是空对象加空数组就不一样了，加号运算符的定义是这样的：**如果其中一个是字符串，另一个也会被转换为字符串，否则两个运算数都被转换为数字。**而同时，javascript有这样的特性，"),s("strong",[t._v("如果{}既可以被认为是代码块，又可以被认为是对象字面量，那么js会把他当做代码块来看待。")]),t._v("\n这就很好解释了，{}被当做了代码块，只有+[]，根据加法的定义，被转换为0，就得到了结果。")]),t._v(" "),s("p",[s("strong",[t._v("在操作符中，==，排序运算符，加减乘除，在对非原始值进行操作时，都会调用内部的"),s("code",[t._v("toPrimitive()")]),t._v("方法")])])])}),[],!1,null,null,null);s.default=e.exports}}]);