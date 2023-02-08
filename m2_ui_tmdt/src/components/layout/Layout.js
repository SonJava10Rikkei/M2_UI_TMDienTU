import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footter } from './Footter'
import { Header } from './Header'
export const Layout = () => {
  return (
      <>
          <Header/>
          <Outlet />
          <Footter/>
    </>
  )
}
