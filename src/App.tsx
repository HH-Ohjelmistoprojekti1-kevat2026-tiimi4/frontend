import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage.tsx";
import Layout from "./components/Layout.tsx";
import ProductsPage from "./components/ProductsPage.tsx";
import About from './components/About.tsx';
import Singup from './components/Singup.tsx';
import Singin from './components/Signin.tsx';
import ReserveProduct from './components/ReserveProduct.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/tuotteet" element={<ProductsPage />} />
          <Route path="/meista" element={<About />} />
          <Route path="/rekisteroidy" element={<Singup />} />
          <Route path="/varaa" element={<ReserveProduct />} />
          <Route path="/kirjaudu" element={<Singin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
