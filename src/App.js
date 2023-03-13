import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import ShowProduct from './components/product/showProduct';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddProduct from './components/form/addProduct';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import Menu from './pages/auth/menu';
import User from './pages/user';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>


        <Routes>
          <Route path='/wm' element={<Home />} />
          <Route path='/wm/cart' element={<ShowProduct />} />
          <Route path='/wm/add' element={<AddProduct />} />
          <Route path='/wm/register' element={<Register />} />
          <Route path='/wm/login' element={<Login />} />
          <Route path='/wm/menu' element={<Menu />} />
          <Route path='/wm/userpage' element={<User />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
