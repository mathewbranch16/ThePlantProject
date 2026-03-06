import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import ExplorePlants from './components/explorePlants';
import Contact from './components/contact';
import Footer from './components/footer';
import AllPlants from './components/allPlants';
import PlantDetails from './components/plantDetails';
import Blog from './components/blog';
import './App.css';
import 'boxicons/css/boxicons.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                {/* <About />
                <ExplorePlants />
                <ShopPlants />
                <Contact /> */}
              </>
            } />
            <Route path="/explorePlants" element={<ExplorePlants />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/all-plants" element={<AllPlants />} />
            <Route path="/plant/:id" element={<PlantDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

