import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content container">
        <motion.div 
          className="home-text"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Welcome to, <br></br>The <span>Plant</span> Project</motion.h1>
          <motion.p variants={fadeInUp}>Discover the beauty of nature, from the smallest seedling to the mightiest tree.</motion.p>
          <motion.div className="cta-buttons" variants={fadeInUp}>
            <a href="/explorePlants" className="btn btn-primary">Explore Plants</a>
            <a href="/blog" className="btn btn-secondary">Read Blogs</a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <img 
            src="/back.png?height=600&width=600" 
            alt="Lush green plants" 
            className="home-image"
          />
        </motion.div>
      </div>
      <motion.div 
        className="features container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="feature" variants={fadeInUp}>
          <i className='bx bx-book-open'></i>
          <h3>Diverse Topics</h3>
          <p>Explore a wide variety of topics on plant care, decor, and sustainability.</p>
        </motion.div>
        <motion.div className="feature" variants={fadeInUp}>
          <i className='bx bx-search-alt'></i>
          <h3>In-Depth Research</h3>
          <p>Dive deep into well-researched articles about plants.</p>
        </motion.div>
        <motion.div className="feature" variants={fadeInUp}>
          <i className='bx bx-chat'></i>
          <h3>Community Insights</h3>
          <p>Learn and share ideas with a community of plant enthusiasts.</p>
        </motion.div>
      </motion.div>

    </section>
  );
}

export default Home;

