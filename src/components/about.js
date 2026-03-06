import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container container">
        <motion.div 
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2>About The <span>Plant</span> Project</h2>
          <p>
            The Plant Project is a passion-driven initiative dedicated to connecting people with the beauty of nature. 
            From small plants to towering trees, we aim to foster love and care for greenery everywhere.
          </p>
        </motion.div>
        <div className="founders">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Founders
          </motion.h3>
          <div className="founder-list">
            <motion.div 
              className="founder"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideLeft}
            >
              <div className="found">
              <img src="/branch.jpg?height=150&width=150" alt="Jane Doe" />
              </div>
              <h4>Branch Mathew</h4>
              <p>
                A lifelong plant enthusiast and environmentalist, I am dedicated to spreading awareness 
                about sustainable living and the importance of preserving our planet's biodiversity.
              </p>
            </motion.div>
            <motion.div 
              className="founder"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideRight}
            >
              <div className="found">
              <img src="/woman.avif?height=150&width=150" alt="John Smith" />
              </div>
              <h4>Jane Smith</h4>
              <p>
                With a background in horticulture and a love for teaching, Janes's mission is to educate 
                communities on how to cultivate their own green spaces and appreciate nature's wonders.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

