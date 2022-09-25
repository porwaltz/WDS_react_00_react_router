import './App.css';
import React from 'react';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'
import NuevosLenguajesJuridicos from './pages/Documents/NuevosLenguajesJuridicos';

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <NuevosLenguajesJuridicos />
            <Footer />
        </>

    )
}

export default App;
