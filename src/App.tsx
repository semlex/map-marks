import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AddMark from './pages/AddMark'
import MarksEdit from './pages/MarksEdit'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'

function App() {
  return (
      <Router basename={'/map-marks'}>
          <Navigation />
          <ScrollToTop>
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/add'} element={<AddMark />} />
                  <Route path={'/edit'} element={<MarksEdit />} />
                  <Route path={'*'} element={<Navigate to='/' />} />
              </Routes>
          </ScrollToTop>
      </Router>
  )
}

export default App
