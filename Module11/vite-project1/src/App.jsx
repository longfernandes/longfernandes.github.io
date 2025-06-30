import { BrowserRouter as Router ,Routes, Route, Link, Navigate } from 'react-router-dom';
import  MainLayout  from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import  LoginPage  from './Pages/LoginPage';
import  SignupPage from './Pages/SignupPage';
import  StudentsPage from './Pages/StudentsPage';
import  Header  from './components/Header';
import { useState } from 'react';
import './App.css'
import AboutLayout from './Pages/about/AboutLayout';
import Team from './Pages/about/Team';
import History from './Pages/about/History';



function App() {

  const [ username, setUsername ] = useState(null);
  
  
  return (
    <div>

      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage />} />
          
         
        </Route>


      
        
      </Routes>
    </div>
   
  );
}

export default App;
