import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage.tsx";
import Layout from "./components/Layout.tsx";
import Manufacturer from './components/Manufacturer.tsx';

function App() {

  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
              <Route path="/" element={<Homepage />} />
              <Route path="/manufacturer" element={<Manufacturer />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
