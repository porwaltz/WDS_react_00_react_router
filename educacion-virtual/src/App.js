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
import ComoEmpezarARedactar from './pages/Documents/ComoEmpezarARedactar';
import ProduccionDeMateriales from './pages/Documents/ProduccionDeMateriales';
import ExploracionDeCulturasJuridicas from './pages/Documents/ExploracionDeCulturasJuridicas';
import CuerpoDocente from './pages/Documents/CuerpoDocente';
import Ented from './pages/Documents/Ented';
import { Routes, Route } from "react-router-dom";


export default function App() {
    return (
        <>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="*" element={< Home/>} />
                <Route path="/" element={< Home/>} />
                <Route path="/WDS_react_00_react_router" element={< Home/>} />
                <Route path="/WDS_react_00_react_router/produccionDeMateriales" element={<ProduccionDeMateriales/>} />
                <Route path="/WDS_react_00_react_router/cuerpoDocente" element={<CuerpoDocente/>} />
                <Route path="/WDS_react_00_react_router/comoHacerUnaMonografia" element={<ComoHacerUnaMonografia />} />
                <Route path="/WDS_react_00_react_router/comoEmpezarARedactar" element={<ComoEmpezarARedactar />} />
                <Route path="/WDS_react_00_react_router/comoEvitarElPlagio" element={<ComoEvitarElPlagio />} />
                <Route path="/WDS_react_00_react_router/nuevosLenguajesJuridicos" element={<NuevosLenguajesJuridicos />} />
                <Route path="/WDS_react_00_react_router/comoInvestigar" element={<ComoInvestigar />} />
                <Route path="/WDS_react_00_react_router/investigacionParaEstudiantes" element={<InvestigacionParaEstudiantes />} />
                <Route path="/WDS_react_00_react_router/bitacoraDelInvestigador" element={<BitacoraDelInvestigador />} />
                <Route path="/WDS_react_00_react_router/exploracionDeCulturasJuridicas" element={<ExploracionDeCulturasJuridicas />} />
                <Route path="/WDS_react_00_react_router/ented" element={<Ented />} />
            </Routes>
            <Footer />
        </>

    )
}


