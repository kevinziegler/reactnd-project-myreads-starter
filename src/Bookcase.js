import React from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

// Temporary mock book data
const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        coverUrl: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
    },
    {
        title: 'Ender\'s Game',
        author: 'Orson Scott Card',
        coverUrl: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
    },
];

const Bookcase = () => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            <div>
                <Shelf name="Currently Reading" books={books} />
            </div>
        </div>
        <div className="open-search">
            <Link to='/search'>
                <button>Add a book</button>
            </Link>
        </div>
    </div>
);

export default Bookcase;
