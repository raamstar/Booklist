import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from 'redux'
import ReactDOM from 'react-dom';
//==>import combine reducer
import reducers from './reducers/index'
//-->import actions
import {addToCart} from './actions/cartActions'

//-->import Raect-Router
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions'

import thunk from "redux-thunk"
// import * as thunkMiddleware from 'redux-thunk';
import logger from "redux-logger"

import Bookslist from "./components/booksList.js"
import Baselayout from "./components/baselayout.js"
import Contact from "./components/contact.js"
import Cart from "./components/cart.js"
import Admin from "./components/admin.js"

// const middleware= applyMiddleware( thunkMiddleware , logger());
const store = createStore(reducers, applyMiddleware(thunk));
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
          <Route path = "/admin" component={Admin} />
        </Switch>
      </Baselayout>
  </Provider>
</BrowserRouter>
  , document.getElementById('app'))
