import './App.css';
import NavBar from './components/navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';


function App() {
  return (
    <div className="container">
      <div className='container-fluid'>
        <NavBar />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;