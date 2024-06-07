import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, ErrorPage, Register,Order } from "./pages/index.js"
import { Provider } from 'react-redux';
import store from "./store/store.js"
import './index.css'
import {AuthLayout} from './component/index.js';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.withCredentials = true



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path="/auth/register" element={<Register/>} />
          <Route path="/auth/login" element={<Login/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
