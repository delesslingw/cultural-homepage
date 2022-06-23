import Directory from './Directory'
import Footer from './Footer'
import Greeting from './Greeting'
import Header from './Header'

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Header></Header>
      <Greeting />
      <Directory />
      <section>Plan a Visit</section>
      <Footer></Footer>
    </div>
  )
}

export default App
