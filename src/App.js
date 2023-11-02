import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Pages } from './pages/Pages'
import ScrollToTop from './components/ScrollToTop'

function App() {
  

  return (
    <BrowserRouter>
      <Pages />
      <ScrollToTop />
    </BrowserRouter>
    
  )
}

export default App
