import React from 'react';
import Card from './Card';


const CardList = ({books}) => {
    const bookArray = books.map((book, i) => {
        return(
            <div key={i} className='tc bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5 col-md-6 book-item'>
                <Card
                    id={books[i].id}
                    bookName={books[i].title}
                    isbn={books[i].isbn}
                    author={books[i].author} /> 
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