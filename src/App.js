import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';
import FetchUsers from './components/FetchUsers';
import FormDemo from './components/FormDemo';
import ContextDemo, { UserProvider } from './components/ContextDemo';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/fetch">FetchUsers</Link>
          <Link to="/form">Form</Link>
          <Link to="/context">Context</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/fetch" element={<FetchUsers />} />
            <Route path="/form" element={<FormDemo />} />
            <Route path="/context" element={<ContextDemo />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
