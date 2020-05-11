const repeatString = function(greeting, num) {
if (num < 0) return "ERROR"
let str = "";
for (let i = 0; i < num; i++) {
str += greeting;
}
return str;
}

repeatString('hey', 3)


module.exports = repeatString
     
     
     
   
