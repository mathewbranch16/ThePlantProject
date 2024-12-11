import React from 'react';
import 'boxicons/css/boxicons.min.css';


function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content container">
        <div className="home-text">
          <h1>Welcome to, <br></br>The <span>Plant</span> Project</h1>
          <p>Discover the beauty of nature, from the smallest seedling to the mightiest tree.</p>
          <div className="cta-buttons">
            <a href="/explorePlants" className="btn btn-primary">Explore Plants</a>
            <a href="/blog" className="btn btn-secondary">Read Blogs</a>
          </div>
        </div>
        <div className="image-container">
          <img 
            src="/back.png?height=600&width=600" 
            alt="Lush green plants" 
            className="home-image"
          />
        </div>
      </div>
      <div className="features container">
  <div className="feature">
    <i className='bx bx-book-open'></i>
    <h3>Diverse Topics</h3>
    <p>Explore a wide variety of topics on plant care, decor, and sustainability.</p>
  </div>
  <div className="feature">
    <i className='bx bx-search-alt'></i>
    <h3>In-Depth Research</h3>
    <p>Dive deep into well-researched articles about plants.</p>
  </div>
  <div className="feature">
    <i className='bx bx-chat'></i>
    <h3>Community Insights</h3>
    <p>Learn and share ideas with a community of plant enthusiasts.</p>
  </div>
</div>

    </section>
  );
}

export default Home;

