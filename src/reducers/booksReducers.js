export function booksReducers(state={
  books:[{
      id:1,
      title: "First Book",
      description: "2nd edition",
      price: "22$"
    },
    {
      id:2,
      title:"second Book",
      description: "3rd edition",
      price:"24$"
    }]}, action){
  switch (action.type){

    case "GET_BOOKS":
    return {...state,books:[...state.books]}
    break;


    case "POST_BOOK":
    // let books=state.books.concat(action.payload)
      return {books:[...state.books, ...action.payload]}
      break;

    case "DELETE_BOOK":
    //create copy of current books
      const currentBooktoDelete= [...state.books]
      const indexToDelete = currentBooktoDelete.findIndex(
        function(book){
          return book.id === action.payload.id;
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
            return book.id === action.payload.id;
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
