import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Library from './Pages/Library'
function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Header></Header>
      <Routes>
        <Route path='/library' element={<Library />}></Route>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
