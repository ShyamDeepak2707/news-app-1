import './App.css';

import React, { Component } from 'react'
import NavBar from './NavBar';
import News from './News';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='news-app-1/' element={<News key="general" country="in" category="general" />} />
            <Route path='news-app-1/entertainment' element={<News key="entertainment" country="in" category="entertainment" />} />
            <Route path='news-app-1/health' element={<News key="health" country="in" category="health" />} />
            <Route path='news-app-1/business' element={<News key="business" country="in" category="business" />} />
            <Route path='news-app-1/science' element={<News key="science" country="in" category="science" />} />
            <Route path='news-app-1/sports' element={<News key="sports" country="in" category="sports" />} />
            <Route path='news-app-1/technology' element={<News key="technology" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

