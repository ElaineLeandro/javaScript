// Question 1 What data type is the variable  item ?
var item = []

console.log(typeof item)

//Question 2 What is the value of  result  for the following code?
var result = "Hello".indexOf('l');

console.log(result)

//Question 3 What is the length of the  clothes  array after this code runs?

var clothes = [];
clothes.push('gray t-shirt');
clothes.push('green scarf');
clothes.pop();
clothes.push('slippers');
clothes.pop();
clothes.push('boots');
clothes.push('old jeans');

console.log(clothes)

//Question 4 What value is printed out by the following code?

var food = [];
  food.push('Chocolate');
  food.push('Ice cream');
  food.push('Donut');

  console.log(food[1]);

//Question 5 How many properties does the  dog  object have after the following code is run?

var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";

console.log(dog)

// Question 6 In the following function, the variables  a  and  b  are known as _______________.

function add(a, b) {
    return a + b;
}

console.log(typeof add)

/** 
 *  Question 7 Which of the following are functions of the Math object?
 *  [x] random()
 *  [x] round()
 *  [x] sqrt()
 *  [ ] trim()
 * 
 * 
 * */ 