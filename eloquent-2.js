for (var hash = "#"; hash <= "#######"; hash = hash += "#")
  console.log(hash);


for (var num = 1; num <=100; num += 1)
  {var toPrint = "";
if (n % 3 == 0) toPrint += "Fizz";
if (n % 5 == 0) toPrint += "Buzz";)
  console.log(toPrint || num);
  }


var chess = "";
var size = 8;

for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if ((x + y) % 2 == 0)
      chess += " ";
    else
    chess += "#";
}chess += "\n"
}
console.log(chess);