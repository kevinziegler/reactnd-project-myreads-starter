import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import { getAll } from './BooksAPI';

class Bookcase extends React.Component {
    constructor() {
        super();
        this.state = {
            shelves: [
                { name: 'Currently Reading', key: 'currentlyReading', books: [] },
                { name: 'Want to Read', key: 'wantToRead', books: [] },
                { name: 'Already Read', key: 'read', books: [] },
            ]
        };

        this.refreshShelves = this.refreshShelves.bind(this);
    };

    componentDidMount() {
        this.refreshShelves();
    };

    sortBooks(shelves, books) {
        return shelves.map( shelf => ({
            ...shelf,
            books: books.filter((book) => book.shelf === shelf.key)
        }));
    };

    refreshShelves() {
        getAll().then(data => {
            this.setState((prevState) => ({
                shelves: this.sortBooks(prevState.shelves, data)
            }));
        });
    }

    render () {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {this.state.shelves.map(shelf => (
                        <Shelf
                          key={shelf.key}
                          name={shelf.name}
                          books={shelf.books}
                          onMove={this.refreshShelves}
                        />
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
    };
}

export default Bookcase;
