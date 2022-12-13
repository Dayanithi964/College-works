import React from 'react';
import Login from './form/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import GetEx from './HTTP/GetEx';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Login />
        <Routes>
            <Route path="/Login" element={<GetEx/>} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App;
