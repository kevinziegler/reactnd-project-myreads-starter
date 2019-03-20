import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import { getAll } from './BooksAPI';

class Bookcase extends React.Component {
    constructor() {
        super();
        this.state = { shelves: [] };
    }

    componentDidMount() {
        getAll().then(data => {
            this.setState({ shelves: [
                { name: 'All the things!', books: data }
            ]});
        });
    };

    render () {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {this.state.shelves.map(shelf => (
                        <Shelf name={shelf.name} books={shelf.books} />
                    ))}
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
        );
    }
}

export default Bookcase;
