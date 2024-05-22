import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../components/Header'
const ClientRoot = () => {
  return (
   <>
    <Header />
    <Outlet />
   </>
  )
}

export default ClientRoot