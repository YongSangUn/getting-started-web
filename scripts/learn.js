// javascript 操作 HTML DOM: Document Object Model 文档对象模型
// 发现 HTML 元素：操作 HTML 之前就必须找到这些元素

// 按 ID 查找
// 查找 ID 是 get Element By Id, Element 没有 s,只能查找到第一个元素
var myElement = document.getElementById("intro");

// 通过标签名称
var x = document.getElementsByTagName("p");
// 先查找 id='main' 的元素，然后查找 'main' 内部的所有 <p> 元素
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");

// 通过类名称查找 HTML 元素 (在Internet Explorer 8 及更早版本不支持)
var x = document.getElementsByClassName("intro");

// 通过 CSS 选择器
// 只选择第一个元素
var x = document.querySelector("p");
// 选择所有的元素，会存储在一个数组中。
var x = document.querySelectorAll("p.intro"); // 返回带有 class='intro' 的所有 <p> 元素
// querySelectorAll() 在Internet Explorer 8 及更早版本不支持

// 通过 HTML 对象集合
/*
文档锚
document.images
document.links
document.scripts
*/
