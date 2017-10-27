import {createStore} from 'redux'
import reducers from './reducers/index'
import {addToCart} from './actions/cartActions'
import ReactDOM from 'react-dom';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'
import React from 'react';
import {render} from 'react-dom';
import Bookslist from "./components/booksList.js"
import {Provider} from "react-redux"
import Menu from "./components/menu.js"
//3rd define reducer in reducers folder
//1st create stpre
const store = createStore(reducers);
store.subscribe(function(){
  console.log('current state is ', store.getState());
})
render(
  <Provider store={store}>
    <div>
      <Menu/>
      <Bookslist />
    </div>
  </Provider>, document.getElementById('app')

)

//2nd create dispatch action
// store.dispatch(postBooks(
//   [{
//     id:1,
//     title: "First Book",
//     description: "2nd edition",
//     price: "22$"
//   },
//   {
//     id:2,
//     title:"second Book",
//     description: "3rd edition",
//     price:"24$"
//   }]
// ))
// store.dispatch(deleteBooks(
//   {
//     id:1
//   }
// ))
// store.dispatch(updateBooks(
//   {
//     id:2,
//     title: 'Learn React in 24h'
//   }
// ))
/////////
//cart///
/////////
// store.dispatch(addToCart([{id:1}]))
