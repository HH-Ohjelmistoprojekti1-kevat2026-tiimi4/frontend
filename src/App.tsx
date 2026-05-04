import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage.tsx";
import Layout from "./components/Layout.tsx";
import ProductsPage from "./components/ProductsPage.tsx";
import About from './components/About.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/tuotteet" element={<ProductsPage />} />
          <Route path="/meista" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
