var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var min = 1 ;
 var max = 100 ;
 var price = Math.floor( Math.random() * (max + 1 - min) ) + min ;
 var obj = {[item]: price};
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart;
 
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    
    var str='In your cart, you have ';
    for (var i = 0; i < cart.length; i++) {
      var keyNames = Object.keys(cart[i]);
      str += `${keyNames} at $${cart[i][keyNames]}.`;
    }
    console.log(str);
    return str;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

