import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footter } from './Footter'
import Header2 from './Header'
export const Layout = () => {
  return (
    <div className='container__gu__trend'>
      {/* <Header /> */}
      <Header2 />
      {/* <Header/> */}
      <Outlet />
      <Footter />
    </div>
  )
}
