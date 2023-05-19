import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Layout />}>
            <Route index element={<Home/>} />   
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes