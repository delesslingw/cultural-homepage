import Footer from './Footer'
import Header from './Header'

export const COLORS = {
  black: '#000',
  white: '#fff',
  navy: '#051940',
  teal: '#41B2A2',
  yellow: '#FBC10B',
  blue: '#0BBCEE',
  orange: '#F25A38',
  red: '#F83A3A',
  green: '#43DB43',
}

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <section>Greeting & About</section>
      <section>Content</section>
      <section>Plan a Visit</section>
      <Footer></Footer>
    </div>
  )
}

export default App
