// Question 1 //

// Show me how to calculate the average price of all items. Please console.log the average

var money = items.map(function(a){

  return a.price;
});
// console.log(money);
// above we pulled in the items.js file denoting all price characters and put them into an array//
var sum = money.reduce(function(subtotal, price){

  return subtotal + price;
});
// console.log(sum);

//took labels of money from previous console.log and reduced it to perfrom a single number. then returned the subtotal and  price

var avg = function(x,y){
return Math.round(x/y * 100) / 100

//round number to 2 decimal places, although i would rather round up
};
console.log("The average price is" + " " + '$' + avg(sum, money.length));


//--------Question 2 -----------//
// Show me how to get an array of items that cost between $14.00 and $18.00 USD

function dollarSign(items){
  return items.currency_code === "USD";  //sets up filter to siphon through USD's.
}

var range = items.filter(dollarSign);

function amount(total){
  return (total.price > 14.00) && (total.price < 18.00);
}

var cheapItems = range.filter(amount);

console.log("Items that cost between $14.00 USD and $18.00 USD:", cheapItems);

// went into items.js folder and filtered out a specified range of items that cost between $14 and $18. Then I returned the items that were < > not <= or >= as there were 3 items shown in the example, not 5.


//--------Question 3 ---------//
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.

var costs = items.filter(function(item){
  // return item.currency_code == 'GBP'
  // return a.title + b.currency_code + c.price{
  //   if (currency_code == GBP );
  // }
});
// costs.forEach(function(item) {
//   console.log(item.title + ' ' + item.price);
// })
items.forEach(function(item){
  if(item.currency_code == 'GBP') {
    console.log(item.title + " " +'£' +item.price);
  }
})
//originally i was trying to filter out the title, currency_code, and the price by separating my items into (a,b,c). That is why is says   // return a.title + b.currency_code + c.price{. Then we went into the item.js file, and said forEach item that is marked as currency_code GPB, we want to console.log the item's title and price. added in the pound sign

//--------- Question 4 ---------//

// Show me how to find which items are made of wood. Please console.log the ones you find.

var woody = items.filter(function(item){

});

items.forEach(function(item){
  if(item.materials.includes("wood")){
    console.log(item.title + " " + "is made of wood");
  }
});


//----------- Question 5 ------------ //
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.

// var amount = items.filter(function(item){
// });
items.forEach(function(item){
  if(item.materials.length >= 8){
    console.log(item.title);
    for(var i = 0; i < item.materials.length; i++){
      console.log(item.materials[i]);
    }
    // console.log(item.title + " " + "materials");
  }
});
//we are pulling each item out of the items.js file. we are saying that if the materials class' length is more than 7 ( or greater than equal to 8), then we are to console.log the title of the particular item. in order to run them on different lines, we then run a for loop stating that by starting at the first word in the array of materials, and continuing until the length is finished, console.log the materials, so long as it is >=8.


// --------- Question 6 ----------- ??
// Show me how to calculate how many items were made by their sellers//

var calculate = items.filter(function(item){
  return item.who_made == "i_did";
});

console.log(calculate.length + " " +"were made by their sellers");

//i set a variable calcualte to equal filter of all the items in the items.js file to only return those who made their own items ( i_did). as those were all stored in the variable calculate, I found the length of those values and then added the values thereafter.
