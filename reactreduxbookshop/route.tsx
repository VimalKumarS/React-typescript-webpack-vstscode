import * as React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './component/common/HomePage'
import About from './component/common/AboutPage'
import Book from './component/book/BookPage'
import App from './component/App'

export default (
  <Route path="/src/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
  </Route>
);