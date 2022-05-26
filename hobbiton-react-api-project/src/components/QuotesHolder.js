import React, {useEffect, useState} from 'react'
import { QuoteDisplay } from './QuoteDisplay';

export const QuotesHolder = () => {

    const API = "https://type.fit/api/quotes";

    const[Quotes,setQuotes] = useState([])

    useEffect(()=> {
         fetch(API)
    .then((response)=>response.json())
    .then((response)=> (
        setQuotes(response)
    ))
    },[])
  


  return (
    <div>
    <h2 id='descrition'> Welcome to the React Quotes API</h2>
    <div className='cont'>
      {
          Quotes.map((quote) => (
              <QuoteDisplay {...quote} />
          ))
      }
    </div>
    </div>
  )
}
