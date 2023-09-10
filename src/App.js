
import { Routes, Route } from 'react-router-dom';

import About from './pages/Aboutpage';
import API from './pages/APIpage';
import Notfound from './pages/Notfoundpage';
import './App.css';
import Home from './pages/Homepage';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/api' element={<API/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
