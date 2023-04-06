import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom'
import Home from './pages/Home'
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Navbar from './components/Navbar';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
      </Routes>
    </Router>
    
  );
}

export default App;
