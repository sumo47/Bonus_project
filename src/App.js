import React from 'react'
import Quotes from './Components/Quotes/Quotes'
import Counter from './Components/Counter_App/Counter'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Counter" element={<Counter />} />
          <Route exact path="/" element={<Quotes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App