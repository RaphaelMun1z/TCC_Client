import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"
import { AuthContext } from './Contexts/AuthContext';

import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import Container from './components/layout/Container';

function App() {
  const { auth } = useContext(AuthContext)

  return (
    <Router>

      <Container customClass="min-height" >
        <NavBar />
        {auth ? <PrivateRoutes /> : <PublicRoutes />}
        <Footer />
      </Container>


      <ToastContainer />
    </Router>
  )
}

export default App;
