import './App.css'
import HomePage from './pages/Home'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
