import React from 'react';
import './App.css';
import UserSignup from './Pages/UserSignup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import UserPublicRoutes from './Routes/UserPublicRoutes';
import UserLogin from './Pages/UserLogin';
import UserProtectedRoute from './Routes/UserProtectedRoute';
import UserHome from './Pages/UserHome';
import UserProfile from './Pages/UserProfile';
import AdminLogin from './Pages/AdminLogin';
import AdminPublicRoute from './Routes/AdminPublicRoute';
import AdminHome from './Pages/AdminHome';
import AdminEditUser from './Pages/AdminEditUser';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<UserPublicRoutes />} >
              <Route path='/login' element={<UserLogin />} />
              <Route path='/signup' element={<UserSignup />} />
            </Route>
            <Route element={<UserProtectedRoute/>} >
              <Route path='/' element={<UserHome/>}/>
              <Route path='/userprofile' element={<UserProfile/>}/>
            </Route>
            <Route element={<AdminPublicRoute/>}>
              <Route path='/admin' element={<AdminLogin/>}/>
            </Route>
            <Route>
              <Route path='/admin/home' element={<AdminHome/>} />
              <Route path='/admin/edituser/:id' element={<AdminEditUser/>}/>
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
