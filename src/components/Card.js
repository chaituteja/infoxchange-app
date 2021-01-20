import React, { useState } from 'react';
import './Card.css'

const Card = ({ bookName,isbn,author }) => {
    const [isActive, setActive] = useState("false");

    const moreInfo = () => {
        setActive(!isActive);
    }
    
    return (
        <div>
            <div className='book-card'>
                <h5 className="pointer" onClick={moreInfo}><span className='book-name'>{bookName}</span></h5>
                {!isActive ?
                    <div className='book-info'>
                        <p className='isbn'>ISBN : {isbn}</p>
                        <p className='author'>Author : {author}</p>
                    </div> 
                : null
                }
            </div>
        </div>
    );
}

export default Card;