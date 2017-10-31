import axios from "axios";

export function getCart(){
  return function(dispatch){
    axios.get("/api/cart")
    .then(function(response){
      dispatch({type:"GET_CART", payload: response.data})
    })
    .catch(function(err){
      dispatch({type:"GET_CART_REJECTED"},msg:"Something went wrong")
    })
  }
}



export function addToCart(cart){
  return function(dispatch){
    axios.post("/api/cart",cart)
    .then(function(response){
      dispatch({type:"ADD_TO_CART",payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"ADD_TO_CART_REJECTED", msg:"Something went wrong"})
    })
  }
  // return {
  //   type:'ADD_TO_CART',
  //   payload: cart
  // }
}
///delete cart
export function deleteCartItem(cart){
  return function(dispatch){
    axios.post("/api/cart",cart)
    .then(function(response){
      dispatch({type:"DELETE_CART_ITEM",payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"DELETE_CART_ITEM_REJECTED", msg:"Something went wrong"})
    })
  }
  // return {
  //   type:'DELETE_CART_ITEM',
  //   payload: cart
  // }
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

  return function(dispatch){
    axios.post("/api/cart",cartUpdate)
    .then(function(response){
      dispatch({type:"UPDATE_CART",payload:response.data})
    })
    .catch(function(err){
      dispatch({type:"UPDATE_CART_REJECTED", msg:"Something went wrong"})
    })
  }

  // return {
  //   type:'UPDATE_CART',
  //   payload: cartUpdate
  // }
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
