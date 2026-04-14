import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Homepage from "./components/Homepage.tsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
