import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/business" element={<News  key={"business"} country="in" pageSize={3} category="business" /> } />
            <Route exact path="/entertainment" element={<News  key={"entertainment"}country="in" pageSize={3} category="entertainment" /> } />
            <Route exact path="/" element={<News key={"general"} country="in" pageSize={3} category="general" /> } />
            <Route exact path="/health" element={<News key={"health"} country="in" pageSize={3} category="health" /> } />
            <Route exact path="/science" element={<News key={"science"} country="in" pageSize={3} category="science" /> } />
            <Route exact path="/sports" element={<News  key={"sports"}country="in" pageSize={3} category="sports" /> } />
            <Route exact path="/technology" element={<News key={"technology"} country="in" pageSize={3} category="technology" /> } />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App