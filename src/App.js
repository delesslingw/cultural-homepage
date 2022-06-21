import COLORS from './COLORS'
import Footer from './Footer'
import Greeting from './Greeting'
import Header from './Header'

function App() {
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Header></Header>
      <Greeting />
      <section
        style={{ width: '100%', height: 500, backgroundColor: COLORS.yellow }}
      >
        Content
      </section>
      <section>Plan a Visit</section>
      <Footer></Footer>
    </div>
  )
}

export default App
