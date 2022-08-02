import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Header></Header>
      <Home />
      <Footer></Footer>
    </div>
  )
}

export default App
