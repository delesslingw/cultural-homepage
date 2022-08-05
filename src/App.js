import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Library from './Pages/Library'
import Classes from './Pages/Classes'
import Programs from './Pages/Programs'
import THPO from './Pages/THPO'
function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
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
