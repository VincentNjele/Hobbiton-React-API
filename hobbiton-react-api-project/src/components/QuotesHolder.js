import React, {useEffect, useState} from 'react'
import { QuoteDisplay } from './QuoteDisplay';

export const QuotesHolder = () => {

    const API = "https://type.fit/api/quotes";

    const[Quotes,setQuotes] = useState([])

    console.log(Quotes);
    useEffect(()=> {
         fetch(API)
    .then((response)=>response.json())
    .then((response)=> (
        setQuotes(response)
    ))
    },[])
  


  return (
    <div className='cont'>
      {
          Quotes.map((quote) => (
              <QuoteDisplay {...quote} />
          ))
      }
    </div>
  )
}
