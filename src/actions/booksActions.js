//GET_BOOKS
export function getBooks(){
  return {
    type:"GET_BOOKS"
  }
}

//POST_BOOK
export function postBooks(book){
  return {
    type:"POST_BOOK",
    payload: book
  }
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
