import './App.css';
import React from 'react';
import Header from './pages/Header'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'
import Home from './pages/Documents/Home'
import NuevosLenguajesJuridicos from './pages/Documents/NuevosLenguajesJuridicos';
import BitacoraDelInvestigador from './pages/Documents/BitacoraDelInvestigador';
import ComoEvitarElPlagio from './pages/Documents/ComoEvitarElPlagio';
import ComoInvestigar from './pages/Documents/ComoInvestigar';
import InvestigacionParaEstudiantes from './pages/Documents/InvestigacionParaEstudiantes';
import ComoHacerUnaMonografia from './pages/Documents/ComoHacerUnaMonografia';
import ProduccionDeMateriales from './pages/Documents/ProduccionDeMateriales';
import { Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/produccionDeMateriales" element={< ProduccionDeMateriales/>} />
                <Route path="comoHacerUnaMonografia" element={<ComoHacerUnaMonografia />} />
                <Route path="comoHacerUnaMonografia" element={<ComoHacerUnaMonografia />} />
                <Route path="comoEvitarElPlagio" element={<ComoEvitarElPlagio />} />
                <Route path="nuevosLenguajesJuridicos" element={<NuevosLenguajesJuridicos />} />
                <Route path="comoInvestigar" element={<ComoInvestigar />} />
                <Route path="investigacionParaEstudiantes" element={<InvestigacionParaEstudiantes />} />
                <Route path="bitacoraDelInvestigador" element={<BitacoraDelInvestigador />} />
            </Routes>
            <Footer />
        </>

    )
}


