import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ArticlePage from './pages/ArticlePage/ArticlePage'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
