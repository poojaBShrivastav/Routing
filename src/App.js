
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Dasboard from "./components/Dashboard"

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
   
    
      
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/dashboard"  element={<Dasboard/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/register"  element={<Register/>}/>
               
            </Routes>
            <Footer/>
            </BrowserRouter>
       


   

     
    </div>
  );
}

export default App;
