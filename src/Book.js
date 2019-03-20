import React from 'react';

import BookshelfChanger from './BookshelfChanger';

const Book = (props) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${ props.book.imageLinks.smallThumbnail })`
                      }}
                    ></div>
                    <BookshelfChanger />
                </div>
              <div className="book-title">{props.book.title}</div>
              <div className="book-authors">{props.book.authors.join(', ')}</div>
            </div>
        </li>
    );
};

export default Book;
