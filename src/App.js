import "./App.css";


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components'
import Home from "./pages/Home";
import Materiais from "./pages/Materiais";
import QuemSomos from "./pages/QuemSomos/index";
import VerMateriais from "./pages/verMateriais";
import  Footer   from "./components/footer/Footer";


function App() {
  return (
    <>


       
    <BrowserRouter>
    <Navbar />

           <Routes >
                <Route  path="/" element={<Home/>}/>
                <Route  path="/materiais" element={<Materiais/>}/>
                <Route  path="/materiais/paisresponsaveis" element={<VerMateriais/>}/>
                <Route  path="/quemsomos" element={<QuemSomos/>}/>
                <Route  path="/quemsomos" element={<QuemSomos/>}/>
           </Routes>
        
           </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;