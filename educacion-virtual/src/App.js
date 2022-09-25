import './App.css';
import React from 'react';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'
import NuevosLenguajesJuridicos from './pages/Documents/NuevosLenguajesJuridicos';
import BitacoraDelInvestigador from './pages/Documents/BitacoraDelInvestigador';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<NuevosLenguajesJuridicos />} />
                <Route path="bitacoraDelInvestigador" element={<BitacoraDelInvestigador />} />
            </Routes>
            <Footer />
        </>

    )
}

export default App;
