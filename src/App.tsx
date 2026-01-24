import './App.css'
import HomePage from './pages/Home'
import Planning from './pages/Planning'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
