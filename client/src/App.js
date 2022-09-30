

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';
import './mine.css'
import 'jquery/dist/jquery.min.js';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {Routes,Route} from 'react-router-dom'
import NotFound from './components/Notfound/NotFound';
import Register from './components/Register/Register';
import {ShowContextProvider} from './ShowContext'
import RegisterSuccess from './components/Register/RegisterSuccess/RegisterSuccess';
import React from "react";
import FullOneProduct from './components/Home/FullOneProduct/FullOneProduct';
import Cart from './components/Cart/Cart';
import BuySuccess from './components/BuySuccess/BuySuccess';







function App() {

  return ( <>

<ShowContextProvider>
<Routes>
  
  <Route path='*' element={<NotFound/>} />
  <Route path='/' element={<Home/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/register' element={<Register/>} />
  <Route path='/registersuccess' element={<RegisterSuccess/>} />
   <Route path='/fullproduct' element={<FullOneProduct/>} >
   <Route path='/fullproduct/login' element={<Login/>}/>
   
   </Route>

   <Route path='/cart' element={<Cart/>}/>
   <Route path='/buysuccess' element={<BuySuccess/>}/>
  

 
  </Routes>

</ShowContextProvider>
 


  </>
    
  );
}

export default App;
