export function addToCart(book){
  return {
    type:'ADD_TO_CART',
    payload: book
  }
}
///delete cart
export function deleteCartItem(cart){
  return {
    type:'DELETE_CART_ITEM',
    payload: cart
  }
}
//add one qty to cart
// export function cartIncrement(book){
//   return {
//     type:'ADD_TO_CART',
//     payload: book
//   }
// }
// //take away one qty from cart
// export function cartDecrement(book){
//   return {
//     type:'ADD_TO_CART',
//     payload: book
//   }
// }
