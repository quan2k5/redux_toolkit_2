import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Pages/Admin'
export default function App() {
  return (
    <div>
      <Routes>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  )
}
