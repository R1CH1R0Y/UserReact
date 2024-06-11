import logo from './logo.svg';
import './App.css';
import View from './components/View';
import AddUser from './components/AddUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/a' element={<AddUser/>}/>
      <Route path='/v' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
