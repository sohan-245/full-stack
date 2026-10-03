import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateUser from './pages/CreateUser'
import Login from './pages/Login'
import Authentication from './pages/Authentication'
import DeleteUser from './pages/DeleteUser'
import UpdateUser from './pages/UpdateUser'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/create-user'element={<CreateUser/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/me'element={<Authentication/>}/>
      <Route path='/delete-user'element={<DeleteUser/>}/>
      <Route path='/update-user'element={<UpdateUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
