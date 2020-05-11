const repeatString = function(string, n) { if (n < 0) return "ERROR";
  let frase = "";
while(n > 0) {frase += string; n--}
  return frase
}



module.exports = repeatString
     
     
     
   
