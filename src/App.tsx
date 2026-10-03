import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/create-user'element={<CreateUser/>}/>
      <Route path='/login'element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
