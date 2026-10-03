import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
import Authentication from './pages/Authentication'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/create-user'element={<CreateUser/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/me'element={<Authentication/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
