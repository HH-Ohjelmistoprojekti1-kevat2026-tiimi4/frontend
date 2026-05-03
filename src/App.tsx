import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from "./components/Homepage.tsx";
import About from './components/About.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/meista" element={<About />} />
      </Routes>
    </>
  )
}

export default App
