import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import ShowProduct from './components/product/showProduct';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>


        <Routes>
          <Route path='/wm' element={<Home />} />
          <Route path='/wm/show' element={<ShowProduct />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
