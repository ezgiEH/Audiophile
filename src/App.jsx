import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path= "/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetail />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </Router>
    
  );
}

export default App;
