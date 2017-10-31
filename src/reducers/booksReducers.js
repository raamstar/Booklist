export function booksReducers(state={
  books:[]}, action){
  switch (action.type){

    case "GET_BOOKS":
    return {...state,books:[...action.payload]}
    break;


    case "POST_BOOK":
    // let books=state.books.concat(action.payload)
      return {...state,books:[...state.books, ...action.payload], msg:"Saved! Click to Continue.", style:"success"}
      break;

    case "POST_BOOK_REJECTED":
      return {...state, msg:"Please, try again", style:"danger"}


    case "DELETE_BOOK":
    //create copy of current books
      const currentBooktoDelete= [...state.books]
      const indexToDelete = currentBooktoDelete.findIndex(
        function(book){
          return book._id == action.payload;
          // return book.title== action.payload;
        }
      )
      return {books: [...currentBooktoDelete.slice(0,indexToDelete),
      ...currentBooktoDelete.slice(indexToDelete +1)]}
      break;

      case "UPDATE_BOOK":
      //create copy of current books
        const currentBookToUpdate= [...state.books]
        const indexToUpdate = currentBookToUpdate.findIndex(
          function(book){
            return book._id === action.payload._id;
          }
        )
        ///create new book object with new title and same array index
        const newBookToUpdate ={
          ...currentBookToUpdate[indexToUpdate],
          title: action.payload.title
        }
        return {books: [...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate +1)]}
        break
    }
  return state
}
