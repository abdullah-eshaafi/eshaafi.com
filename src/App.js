import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import FAQ from './Pages/FAQ'
import BlogPost from './Pages/blog/BlogPost'
import Blog from './Pages/blog/BlogPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/whyhealth' element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
