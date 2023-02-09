import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Client } from './pages/Client';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <>
      <div>

        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Client' element={<Client />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Products' element={<Products />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
