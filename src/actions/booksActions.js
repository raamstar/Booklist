//GET_BOOKS
import axios from "axios";

export function getBooks(){
  return {
    type:"GET_BOOKS"
  }
}

//POST_BOOK
export function postBooks(book){
  return function(dispatch){
    axios.post("/books", book)
    .then(function(response){
      dispatch({type:"POST_BOOK", payload: response.data})
    })
    .catch(function(err){
      dispatch({type:"POST_BOOK_REJECTED", payload: "There was an error."})
    })
  }
  // return {
  //   type:"POST_BOOK",
  //   payload: book
  // }
}

//DELETE_BOOK
export function deleteBooks(id){
  return {
    type:"DELETE_BOOK",
    payload: id
  }
}

//UPDATE_BOOK
export function updateBooks(id){
  return {
    type:"UPDATE_BOOK",
    payload: id
  }
}
