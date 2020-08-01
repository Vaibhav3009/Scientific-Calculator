function addChar(input, character) {
if (input.value == null || input.value == "0")
input.value = character
else
input.value += character
}
function cos(form) {
value= form.display.value
degree_val= value*(3.1415926)/180
form.display.value = 'cos('+ value +') =' + Math.cos(degree_val).toFixed(4);
}
function sin(form) {
value= form.display.value
degree_val= value*(3.1415926)/180
form.display.value = 'sin('+ value +') =' + Math.sin(degree_val).toFixed(4);
}
function tan(form) {
value= form.display.value
degree_val= value*(3.1415926)/180
form.display.value = 'tan('+ value +') =' + Math.tan(degree_val).toFixed(4);
}
function sqrt(form) {
form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
form.display.value = Math.log(form.display.value);
}
function cube(form){
value= form.display.value
cube= value*value*value
form.display.value= cube
}
function deleteChar(input) {
input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
function percent(input) {
val = input.value;
input.value = input.value + "%";
}
function changeSign(input) {
if (input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}
function compute(form) {
form.display.value = eval(form.display.value);
}
function square(form) {
form.display.value = eval(form.display.value) * eval(form.display.value)
}
function checkNum(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.charAt(i);
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
&& ch != "(" && ch != ")" && ch != "%") {
alert("invalid entry!")
return false
}
}
}
return true
}

