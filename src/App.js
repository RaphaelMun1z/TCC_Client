import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Sections from './components/pages/Sections/Sections';
import Home from './components/pages/Home/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Adm from './components/pages/Adm/Adm'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Products from './components/pages/Products/Products';
import NewProduct from './components/pages/Products/NewProduct';

function App() {
  return (
    <Router>

      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/sections' element={<Sections />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/management' element={<Adm />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/newproduct' element={<NewProduct />}></Route>
        </Routes>
      </Container>

      <Footer />

    </Router>
  );
}

export default App;
