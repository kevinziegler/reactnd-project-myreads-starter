import React from 'react';
import { update } from './BooksAPI';

class BookshelfChanger extends React.Component {
    constructor() {
        super();
        this.isSelectedShelf = this.isSelectedShelf.bind(this);
    }

    render() {
        const options = [
            { key: "currentlyReading", name: "Currently Reading" },
            { key: "wantToRead", name: "Want to Read" },
            { key: "read", name: "Read" },
            { key: "none", name: "None" },
        ];

        return (
            <div className="book-shelf-changer">
              <select onChange={event => this.updateBook(event)}>
                <option value="move" disabled>Move to...</option>
                    {options.map((option) => (
                        <option
                            value={option.key}
                            selected={this.isSelectedShelf(option)}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    updateBook(event) {
        update(this.props.book, event.target.value)
            .then(() => this.props.onMove());
        event.preventDefault();
    }

    isSelectedShelf(shelf) {
        const selectedShelf = this.props.book.shelf || 'none';
        return selectedShelf === shelf.key;
    }
};

export default BookshelfChanger;
