import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import Formsong from "./components/playlist/form";
import Playlist from "./components/playlist/playlist";
import Navbar from './components/navbar/Navbar'

import 'react-toastify/dist/ReactToastify.css';
import "bootswatch/dist/solar/bootstrap.min.css"
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
     <div className="container p-4">
     <Switch>
        <Route path="/" component={ Playlist } exact />
        <Route path="/addsong" component={ Formsong } />
        <Route path="/update/:id" component={ Formsong } />
      </Switch>
      <ToastContainer/>
     </div>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
