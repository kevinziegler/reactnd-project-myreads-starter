import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import { getAll, search } from './BooksAPI';

class BookSearch extends React.Component {
    constructor() {
        super();

        this.emptyMessage = this.emptyMessage.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
        this.processResults = this.processResults.bind(this);
        this.refreshLocalBooks = this.refreshLocalBooks.bind(this);

        this.state = { query: '', results: [] };
    }

    componentDidMount() {
        this.refreshLocalBooks();
    }

    refreshLocalBooks() {
        getAll().then(books => this.setState({
            books: books.reduce((idMap, book) => {
                idMap[book.id] = book;
                return idMap;
            }, {})
        }));
    }

    emptyMessage() {
        const message = (this.state.query.length === 0)
            ? 'Enter a query above to search for books'
            : 'No results found!';

        return (<h3>{message}</h3>);
    }

    renderResults() {
        return (
            <ol className="books-grid">
                { this.state.results.map(book => (
                    <Book key={book.id} book={book} onMove={this.refreshLocalBooks} />
                ))}
            </ol>
        );
    }

    searchBooks(event) {
        const query = event.target.value;
        event.preventDefault();
        this.setState({ query });

        search(query).then(this.processResults);
    }

    processResults(results) {
        results = ((results || {}).error || this.state.query.length === 0)
            ? []
            : results;

        results = results.map(book => this.state.books[book.id] || book);
        this.setState({ results });
    }

    render() {
        return  (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                          type="text"
                          placeholder="Search by title or author"
                          value={this.state.query}
                          onChange={this.searchBooks}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {
                        (this.state.results.length === 0)
                            ? this.emptyMessage()
                            : this.renderResults()
                    }
                </div>
            </div>
        );
    }
}

export default BookSearch;
