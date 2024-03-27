import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';

export const ProductList = () => {
  const [queryParams] = useSearchParams();
  const location = useLocation();
  const q = queryParams.get("q");
  console.log(location);

  return (
    <main>
      <div className='component'>ProductList - {q}</div>
    </main>
    
  )
}
