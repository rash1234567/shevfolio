import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Projects from './Projects/Projects'
import Backend from './Projects/backend-projects/backend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/backend-projects" element={<Backend/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
