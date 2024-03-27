import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();


  return (
    <main>
      <div className='component'>Contact</div>
      <Outlet />
      <button onClick={() => navigate("/")}>Back to Home</button>

    </main>
    
  )
}
