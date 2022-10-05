import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import * as api from "./service";
import Update from "./components/update";
import Delete from "./components/delete";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/User/Index";

const axios = require("axios");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add-user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
