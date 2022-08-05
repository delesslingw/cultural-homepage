import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Library from './Pages/Library'
import Classes from './Pages/Classes'
import Programs from './Pages/Programs'
import THPO from './Pages/THPO'
import useBreakpoints from './hooks/useBreakpoints'
function App() {
  const { breakpoint } = useBreakpoints()
  return (
    <div className='App' style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          padding: 5,
          backgroundColor: 'yellowgreen',
          height: '3vh',
          zIndex: 100,
        }}
      >
        {breakpoint}
      </div>
      <Header></Header>
      <Routes>
        <Route path='/THPO' element={<THPO />}></Route>
        <Route path='/programs' element={<Programs />}></Route>
        <Route path='/classes' element={<Classes />}></Route>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
