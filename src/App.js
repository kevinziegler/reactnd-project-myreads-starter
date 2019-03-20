import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookSearch from './BookSearch';
import Bookcase from './Bookcase';

class BooksApp extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Route exact path='/' component={Bookcase} />
          <Route exact path='/search' component={BookSearch} />
        </BrowserRouter>
    );
  }
}

export default BooksApp;
