// javascript: JS
/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";
let text = myHeading.textContent;


if (text === "Hello World!") {
  alert("你好世界");
} else {
  alert("不好啊");
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
multiply(5, 6);

事件为网页添加真实的交互能力。
document.querySelector("html").onclick = function () {
  alert("Do not touch me.");
};
*/

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-logo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name: ");

  // 防止用户为 null
  if (!myName || myName === null) {
    setUserName();
  } else {
    // 创建一个 'name' 数据项
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storeName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storeName;
}

myButton.onclick = function () {
  setUserName();
};
