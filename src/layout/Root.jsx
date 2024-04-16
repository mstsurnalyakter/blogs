import Footer from 'components/Footer'
import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <>
    <Header/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default Root