import React from 'react'
import './assets/styles/Main.scss'
import Navbar from './components/header/Navbar'
import Header from './components/header/Header'
import { routes } from './helpers/routes'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.path} />
        ))}
      </Routes>
    </div>
  )
}

export default App