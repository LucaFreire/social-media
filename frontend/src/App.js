import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createAccount' element={<CreateAccount />} />
      </Routes>
    </>);
}

export default App;