import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const pathParams = useParams();
  console.log(pathParams);
  
  return (
    <main>
      <div className='component'>ProductDetail - {pathParams.id}</div>
    </main>
    
  )
}
