
import { Routes, Route } from 'react-router-dom';

import About from './pages/Aboutpage';
import API from './pages/APIpage';
import Notfound from './pages/Notfoundpage';
import './App.css';
import Home from './pages/Homepage';
import Header from './components/Header/Header';
import Login from './pages/Loginpage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Header/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/api' element={
          <RequireAuth>
            <API/>
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
