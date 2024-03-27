import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Contact, ProductDetail, ProductList, Admin, NotFound, ContactIn, ContactUs } from '../pages';


export const AllRoutes = (props) => {
  return (
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<Contact />} />
          </Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />}></Route>
          <Route path="admin" element={ props.userStatus ? <Admin /> : <Navigate to="/" /> }></Route>
          <Route path="*" element={<NotFound errorCode="404" />}></Route>
        </Routes>
  )
}
