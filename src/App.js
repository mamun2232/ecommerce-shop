import logo from './logo.svg';
import './App.css';
import Home from './components/page/Home/Home';
import { Routes , Route} from 'react-router-dom';
import ProductInfo from './components/page/Home/ProductInfo';
import Navber from '../src/components/page/Utilitis/Navber';
import AllProduct from './components/page/Product/AllProduct';
import Login from './components/page/Authontication/Login';
import RequreAuth from './components/page/Authontication/RequreAuth';
import Cart from './components/page/Cart/Cart';
function App() {
  return (
    <div className="">
       <Navber/>
            <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/all/product' element={<RequreAuth>
          <AllProduct/>
        </RequreAuth>}/>
        <Route path='/productInfo/:id' element={<RequreAuth>
          <ProductInfo/>
        </RequreAuth>}/>
        <Route path='/login' element={<Login/>}/>

       
      </Routes>
  
    </div>
  );
}

export default App;
