import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/account" element={<Account setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
