let todos = ['Get groceries', 'Wash car', 'Make dinner'];
todos.push('another todo');

todos.forEach(function(todoTitle) {
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});



function toUpper(arr) {
  let newArr = [];
  arr.forEach(function(item) {
    newArr.push(item.toUpperCase());
  })
  console.log(newArr);
}

toUpper(['hello', 'world']);

function arrayDouble(arr) {
  let newArr = [];
  
  arr.forEach(function(item) {
    newArr.push(item);
    newArr.push(item);
  })
  console.log(newArr);
}

arrayDouble(['bark', 'meow']);


function arraySum(numsArr) {
  let total = 0;
  numsArr.forEach(function (nums) {
    total += nums
  })
  console.log(total)
}

arraySum([1,2,3]);
arraySum([5, -2, 7, 0]);
















