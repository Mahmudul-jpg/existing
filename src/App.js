import React from 'react'
import './App.css';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
  let navigate = useNavigate()
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <div >
      <nav>
        <NavLink className="navLink" to='/'>Home</NavLink>
        {!isAuth ? (<NavLink className="navLink" to='/login'>Login</NavLink>) : (
          <>
            <NavLink className="navLink" to='/createpost'>Create-Post</NavLink><button className="btn-logout" onClick={logOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

    </div>
  );
}

export default App;
