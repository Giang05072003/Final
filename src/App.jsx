import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import BookDetail from './components/bookDetail';

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
            <Route path="/search/:searchTerm" element={<Home searchData={searchData} />} >
            </Route>
            <Route path="/book/:id" element={<BookDetail />}>
            </Route>
            <Route path="/" element={<Home searchData={""} />}>
            </Route>
          </Routes>

          <Footer />
        </>
      </Router>
    </>
  );
}

export default App;
