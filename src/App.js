import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Library from './Pages/Library'
import Classes from './Pages/Classes'
import Programs from './Pages/Programs'
import THPO from './Pages/THPO'
import { BreakpointTool } from './hooks/useBreakpoints'
import Schedule from './Pages/Schedule'
import BookingConfirmation from './Pages/BookingConfirmation'

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <BreakpointTool />
      <Header></Header>
      <Routes>
        <Route path='/THPO' element={<THPO />}></Route>
        <Route path='/programs' element={<Programs />}></Route>
        <Route path='/classes' element={<Classes />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/schedule' element={<Schedule />}></Route>
        <Route
          path='/booking-confirmation'
          element={<BookingConfirmation />}
        ></Route>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
