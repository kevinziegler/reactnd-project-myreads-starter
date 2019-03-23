import React from 'react';

import BookshelfChanger from './BookshelfChanger';

const Book = ({book, onMove}) => {
    const authors = book.authors || [];
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${ book.imageLinks.smallThumbnail })`
                        }}
                    ></div>
                    <BookshelfChanger book={book} onMove={onMove} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        </li>
    );
};

export default Book;
