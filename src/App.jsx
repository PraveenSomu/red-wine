
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Pages/about'
import Events from './Pages/Events'
import Shop from './Pages/shop'
import Menu from './pages/menu'
import Reservation from './Pages/reservation'
import Frontpage from './Pages/frontpage'




function App() {


  return (
    <>

    <Navbar/>
    <Frontpage/>
    
   

    <Routes>

      <Route path='/about' element={ <About/> } />
      <Route path='/shop' element={ <Shop/> } />
      <Route path='/events' element={ <Events/> } />
      <Route path='/menu' element={ <Menu/> } />
      <Route path='/reservation' element={ <Reservation/>  } />
      
    </Routes>
    
      
    </>
  )
}

export default App;
