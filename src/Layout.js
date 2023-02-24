import React from 'react'
import SideNav from './SideNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App'>
        <SideNav />
        <Outlet />
    </div>
  )
}

export default Layout