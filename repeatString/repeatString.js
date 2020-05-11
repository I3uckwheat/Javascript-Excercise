const repeatString = function(str, n) { if (n < 0) return "ERROR";
  let frase = "";
while(n > 0) {frase += str; n--}
  return frase
}



module.exports = repeatString
     
     
     
   
