import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login'
import AdminIndex from './index'
function Main(){
    return (
        <Router>      
            <Routes>
              <Route path="/login" exact element={<Login/>} />
              <Route path="/index" exact element={<AdminIndex/>} />
            </Routes>
        </Router>
    )
}
export default Main