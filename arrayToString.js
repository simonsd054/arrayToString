const givenArray = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

console.log(list1(givenArray));

console.log(list2(givenArray));

//using operations in string
function list1(arr) {
  let names = givenArray.map(function (item) {
    return item.name;
  });
  names = names.toString().replace(/,/g, ", "); //Replace comma globally
  index = names.lastIndexOf(","); //find index of the last comma to replace it with ampersand
  names = names.slice(0, index) + names.slice(index).replace(",", " &"); //to replace last comma, split the string in two parts at the last comma and replace comma in the right substring with ampersand and then join using '+'
  return names;
}

//Looping in array and using 'if' statement
function list2(arr) {
  let finalString = "";
  for (item of arr) {
    finalString = finalString + item.name;
    if (arr.indexOf(item) < arr.length - 2) {
      finalString = finalString + ", ";
    } else if (arr.indexOf(item) === arr.length - 2) {
      finalString = finalString + " & ";
    }
  }
  return finalString;
}
