
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
// import CoffeeManagementDashboard from './CoffeeManagementDashboard';
import Details from './Details';
import CoffeeManagementDashboard from './CoffeeManagement';
import Header from './Header';
import Home from './Home';



const App = () => {
  return (
    
      <div className="App">
        <Routes>
        <Route  path="/"element={<Home/>} />
          <Route  path="/coffee"element={<CoffeeManagementDashboard/>} />
          <Route path="/Data/:id" element={<Details/>} />
        </Routes>
       
      </div>
    
  );
};

export default App;