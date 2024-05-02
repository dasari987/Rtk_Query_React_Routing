import logo from './logo.svg';
import './App.css';
import Navbar from './features/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Outlet></Outlet>
    </div>
  );
}

export default App;
