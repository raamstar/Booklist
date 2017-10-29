import {createStore} from 'redux'
import reducers from './reducers/index'
import {addToCart} from './actions/cartActions'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'
import React from 'react';
import {render} from 'react-dom';
import Bookslist from "./components/booksList.js"
import {Provider} from "react-redux"
import Baselayout from "./components/baselayout.js"
import Contact from "./components/contact.js"
import Cart from "./components/cart.js"
//3rd define reducer in reducers folder
//1st create stpre
const store = createStore(reducers);
store.subscribe(function(){
  console.log('current state is ', store.getState());
})
render(
<BrowserRouter>
  <Provider store={store}>
      <Baselayout>
        <Switch>
          <Route exact path="/" component={Bookslist} />
          <Route exact path="/contact" component={Contact} />
          <Route path ="/cart" component={Cart}/>
        </Switch>
      </Baselayout>
  </Provider>
</BrowserRouter>
  , document.getElementById('app'))
