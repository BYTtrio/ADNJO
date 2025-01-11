import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider.tsx'
import Login from '@/pages/login-page.tsx'
import Register from '@/pages/register-page.tsx'
import Home from '@/pages/home.tsx'
import Leaderboard from '@/pages/leaderboard.tsx'
import Trophies from '@/pages/trophies.tsx'
import Profile from '@/pages/profile.tsx'
import CreateFlashcardSet from './pages/create-flashcard-set.tsx'


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/leaderboard' element={<Leaderboard/>} />
          <Route path='/trophies' element={<Trophies/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/flashcards/create' element={<CreateFlashcardSet/>}/>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
