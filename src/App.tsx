import './App.css'
import HomePage from './pages/Home'
import Planning from './pages/Planning'
import Contact from './pages/Contact'
import Reglement from './pages/Reglement'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reglement" element={<Reglement />} />
        </Routes>
      </main>
    </div>
  )
}
