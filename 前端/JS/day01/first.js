"use strict";
// alert("I’m JavaScript!");
let name = "小明";
const REDCOLOR = "#F00";
let admin = "管理员";
// ${}可以包括变量或者表达式等，但是只有在``反引号内才有用。
let name1 = `我是${name}`
// alert(name1);
// alert(typeof name1);
// alert(typeof(5));
// alert(typeof alert);
// alert(typeof null);
let name2 = `我是${"name1"}`;
alert(name2);

let name3 = String(123);
// alert(typeof name3);
let num1 = Number("123");
alert(typeof num1);
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log("\t \n" - 2);

