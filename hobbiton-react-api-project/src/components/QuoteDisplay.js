import React from 'react'

export const QuoteDisplay = ({text,author}) => {
  return (
    <div>
       <div className='container'>
         
       <div className='single-quote'>
            <article id='single-article'>
                <p>The Author: {author}</p>
                <p>Quote: {text}</p>
            </article>
       </div>
       </div>
    </div>
  )
}
