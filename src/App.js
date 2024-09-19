import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './Pages/ProductDetailPage';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path ='/product/:id' element = {<ProductDetailPage/>}/>
        </Routes>
      </Router>
      {/* <HomePage/> */}
{/* <ProductPage/> */}

    </div>
  );
}

export default App;
