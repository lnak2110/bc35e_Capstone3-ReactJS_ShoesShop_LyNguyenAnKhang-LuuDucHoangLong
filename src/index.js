import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/scss/main.scss';

import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './templates/hometemplate/HomeTemplate';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import Search from './pages/search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path='' element={<HomeTemplate/>}>
            <Route index element={<Home/>}></Route>
                    <Route path='detail'>
                        <Route path=':id' element={<Detail />}></Route>
                    </Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='register' element={<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='search' element={<Search/>}></Route>
            <Route path='*' element={<Navigate to=''/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
</Provider>);
