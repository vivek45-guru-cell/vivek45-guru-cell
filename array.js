let fruit=["apple","banana","cherry"];
console.log(fruit);
fruit[1]="blue berry";
console.log(fruit);
for(let i=0;i<fruit.length;i++){
    console.log(fruit);
}
fruit.forEach(function(fruit) {
    console.log(fruit);
  });
  fruit.push("orange");//used to add new element at end posn
  console.log(fruit);
  fruit.unshift("grape");//used to add new element at 1st posn
  console.log(fruit);
  fruit.pop();//removes the last element
  console.log(fruit);
  fruit.shift();//removes the 1st element
  console.log(fruit);
  let color=["red","green","blue"];
  color.splice(1,1,"yellow");
  console.log(color);
  
  