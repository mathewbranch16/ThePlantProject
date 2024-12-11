import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container container">
        <div className="about-text">
          <h2>About The <span>Plant</span> Project</h2>
          <p>
            The Plant Project is a passion-driven initiative dedicated to connecting people with the beauty of nature. 
            From small plants to towering trees, we aim to foster love and care for greenery everywhere.
          </p>
        </div>
        <div className="founders">
          <h3>Our Founders</h3>
          <div className="founder-list">
            <div className="founder">
              <div className="found">
              <img src="/branch.jpg?height=150&width=150" alt="Jane Doe" />
              </div>
              <h4>Branch Mathew</h4>
              <p>
                A lifelong plant enthusiast and environmentalist, I am dedicated to spreading awareness 
                about sustainable living and the importance of preserving our planet's biodiversity.
              </p>
            </div>
            <div className="founder">
              <div className="found">
              <img src="/woman.avif?height=150&width=150" alt="John Smith" />
              </div>
              <h4>Jane Smith</h4>
              <p>
                With a background in horticulture and a love for teaching, Janes's mission is to educate 
                communities on how to cultivate their own green spaces and appreciate nature's wonders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

