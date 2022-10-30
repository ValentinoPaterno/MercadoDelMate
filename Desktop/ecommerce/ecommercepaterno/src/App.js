import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalogo from './components/menu/Catalogo';
import Contacto from './components/menu/Contacto';
import Nosotros from './components/menu/Nosotros';
import ItemListContainer from './components/ItemListContainer';
import Mates from './components/menu/products/Mates';
import Termos from './components/menu/products/Termos';
import Bombillas from './components/menu/products/Bombillas';
import Materas from './components/menu/products/Materas';
import Accesorios from './components/menu/products/Accesorios';
import Combos from './components/menu/products/Combos';


function App() {
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={`Bienvenido!`}/>}/>
      <Route path='/catalogo' element={<Catalogo/>}/>
      <Route path='/catalogo/mates' element={<Mates/>} />
      <Route path='/catalogo/termos' element={<Termos/>}/>
      <Route path='/catalogo/bombillas' element={<Bombillas/>}/>
      <Route path='/catalogo/materas' element={<Materas/>}/>
      <Route path='/catalogo/accesorios' element={<Accesorios/>}/>
      <Route path='/catalogo/combos' element={<Combos/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App;
