# js-backbench

// sort 
function reordertext( input){
    var output = "";
    var inp = input.split(" ");
    var sortedinp = inp.sort(function(a,b){ return a.length - b.length; });
    console.log (sortedinp);
    for (var i =0;i < sortedinp.length; i++){
        output += sortedinp[i] + " ";
    }
    return output;
}

//uppercamelcase
function upperCamerCaser(input) {
var output="";
var splitStr = input.toLowerCase().split(' ');
for (var i =0 ; i< splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     

}

return splitStr.join(' '); 
}


console.log(reordertext("Hello from Apple in CA Sunnyvale"));

console.log(upperCamerCaser("hello from apple in cA sunnyvale"));

// second largest
function findSecondLargest(input)
{
  var secondlargest = null;
  //if (input.length < 2) return null;
  var largest = null;
  for (var i = 0; i <  input.length; i++){
    if (input[i] > largest || largest == null){
      secondlargest = largest;
      largest = input[i];
    } else if ((input[i] > secondlargest  || secondlargest == null) && (input[i] != largest))
      secondlargest = input[i]; 
  }  
  return secondlargest;
}

var test = [-2, -2];

console.log(findSecondLargest(test));  // null

var test = [ -3, -4, -2, -7, -1, -12];
console.log(findSecondLargest(test)); // -2




var test = [1,4,6,9,3,2,2,3,5,6,3,3];
console.log(findSecondLargest(test)); // 6

// here's your array :
var stringArray = new Array('20','120','111','215','54','78');

// let's convert it to a real array of numbers, not of strings :
var intArray = stringArray.map(Number);

// now let's sort it and take the second element :
var second = intArray.sort(function(a,b){return b-a})[1]; 
