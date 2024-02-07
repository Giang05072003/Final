import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

function App() {

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
  }, [searchData]);

  const handleSearch = (searchTerm) => {
      setSearchData(searchTerm);
  };

  return (
    <>
      <Router>
        <>
          <Header onSearch={handleSearch} />

          <Routes>
            <Route path="/book/:id" element={<Header onSearch={handleSearch} />}>
            </Route>
            <Route path="/" element={<Home searchData={searchData} />}>
            </Route>
          </Routes>

          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
