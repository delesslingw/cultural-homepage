import Directory from './Directory'
import Footer from './Footer'
import Greeting from './Greeting'
import Header from './Header'
import Visit from './Visit'

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Header></Header>
      <Greeting />
      <Directory />
      <Visit />
      <Footer></Footer>
    </div>
  )
}

export default App
