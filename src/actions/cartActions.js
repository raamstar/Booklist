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

export function updateCartQuantity(_id, unit, cart){
  const currentBookToUpdate= cart
  const indexToUpdate = currentBookToUpdate.findIndex(
    function(book){
      return book._id === _id;
    }
  )
  const newBookToUpdate ={
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  }
  let cartUpdate=[...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,
  ...currentBookToUpdate.slice(indexToUpdate +1)]
  return {
    type:'UPDATE_CART',
    payload: cartUpdate
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
