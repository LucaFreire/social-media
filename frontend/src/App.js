import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ProtectedRoute from './components/ProtectedRoute';
import Denied from './components/Denied';
function App() {
  return (
    <>
      <Routes>
        {/* <Route path='*' element={<NotFound />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />

        <Route path='' element={
          <ProtectedRoute
            Denied={<Denied />}
            Target={<NavBar />} />} >
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    </>);
}

export default App;