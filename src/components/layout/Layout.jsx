import React from 'react'
import {NavigationBar} from '..//navigationBar/NavigationBar'
import './styleLayout.scss'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <NavigationBar/>
        <Outlet/>
    </>
  )
}

export default Layout