import React from 'react';
import Card from './Card';
import UpdateBook from './UpdateBook';



const CardList = ({books, bookData, updateBook, handleChange,getBook}) => {
    const bookArray = books.map((book, i) => {
        return(
            <div key={i} className='tc bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5 col-md-6 book-item'>
                <Card
                    id={books[i].id}
                    bookName={books[i].title}
                    isbn={books[i].isbn}
                    author={books[i].author} />
                <UpdateBook
                    elementId={books[i].id}
                    bookData={bookData}
                    getBook={getBook}
                    updateBook={updateBook}
                    handleChange={handleChange} />       
            </div>    
    )})
    return (
        <div className='container list-container'>
            <div className='row justify-content-center'>
            {bookArray}
            </div>
        </div>
    )
}

export default CardList;