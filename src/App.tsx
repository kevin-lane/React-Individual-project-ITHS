import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { ProductContext } from './components/context/ProductContext';

function App() {
  const [id, setId] = useState<number>(2);
  const [title, setTitle] = useState<string>('bla');
  const [userName, setUserName] = useState<string>('user');
  const [price, setPrice] = useState<number>(2);
  const [img, setImg] = useState<string>('image');

  return (
    <div className="App">
      <NavBar />
      <ProductContext.Provider value={{id, setId, title, setTitle, userName, setUserName, price, setPrice, img, setImg}}>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/store' element={ <Store /> } />
          {/* Låt en komponent anpassas efter ett adressparametervärde */}
          <Route path='/store/:photoId' element= {
              <Product id={id} title={title} userName={userName} price={price} img={img} />
          } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  )
}

export default App
