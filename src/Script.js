var MyClass = typeof Java == "undefined" ? function () {
  this.printMsg = function (text) {
    console.log(text)
  }
} : Java.type("org.jetbrains.nashorn.test.EvalScript.MyClass");

var intValue = 42;
var stringValue = "bar";
var booleanValue = true;
var booleanValue2 = false;
var undefinedValue = undefined;
var nullValue = null;

var functionValue = function () {
  console.log("Hello");
};

var my = new MyClass();
var fun = function () {
  my.printMsg("Hello1");
};

fun();