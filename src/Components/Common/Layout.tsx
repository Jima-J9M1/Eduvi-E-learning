import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

type Props = {}

export default function Layout({}: Props) {
  return (
    <div className=' px-8 py-6 bg-gray-200'>
        <header>
            <Nav/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}