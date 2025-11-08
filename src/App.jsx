import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import { AnimatePresence } from 'motion/react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Blogpage from './pages/Blogpage'
import Details from './pages/Details'
import Schedule from './pages/Schedule'

function App() {

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blog' element={<Blogpage />} />
            <Route path='consultations' element={<Details />} />
            <Route path='schedule' element={<Schedule />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>

  )
}

export default App
