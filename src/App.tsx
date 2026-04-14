import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.tsx";
import Homepage from "./components/Homepage.tsx";
import Layout from "./components/Layout.tsx";

function App() {

  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Layout>
  )
}

export default App
