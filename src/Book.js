import React from 'react';

import BookshelfChanger from './BookshelfChanger';

const Book = ({book, onMove}) => {
    const authors = book.authors || [];
    let imgUrl = '';

    if (book.imageLinks && book.imageLinks.thumbnail) {
        imgUrl = book.imageLinks.thumbnail;
    }

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imgUrl})`
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
