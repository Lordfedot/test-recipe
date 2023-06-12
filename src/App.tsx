import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
