import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const allPlants = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    description: "A beautiful plant known for its large, glossy leaves.",
    image: "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?crop=center&height=2048&v=1694161186&width=2048",
    careInstructions: "Keep in bright, indirect light and water when the topsoil feels dry.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water once a week.",
  },
  {
    id: 2,
    name: "Snake Plant",
    description: "An easy-to-care-for plant that thrives in various conditions.",
    image: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w",
    careInstructions: "Allow soil to dry out between waterings. Tolerates low light.",
    sunlightNeeds: "Low to bright, indirect sunlight.",
    wateringFrequency: "Water every 2-3 weeks.",
  },
  {
    id: 3,
    name: "Monstera",
    description: "A tropical plant with iconic split leaves.",
    image: "https://plantersplace.com/wp-content/uploads/2022/08/20200309_110255-scaled.jpg",
    careInstructions: "Keep in medium to bright, indirect light and water when the topsoil is dry.",
    sunlightNeeds: "Medium to bright, indirect sunlight.",
    wateringFrequency: "Water once a week.",
  },
  {
    id: 4,
    name: "Pothos",
    description: "A versatile vining plant that's perfect for beginners.",
    image: "https://media.houseandgarden.co.uk/photos/64bff5f4d6a55acd0397054e/master/pass/Screenshot%202023-07-25%20at%2017.17.10.png",
    careInstructions: "Thrives in a variety of lighting conditions and is drought-tolerant.",
    sunlightNeeds: "Low to bright, indirect sunlight.",
    wateringFrequency: "Water every 1-2 weeks.",
  },
];

function ExplorePlants() {
  const [visiblePlants, setVisiblePlants] = useState(3);

  const loadMore = () => {
    setVisiblePlants(prevVisible => Math.min(prevVisible + 6, allPlants.length));
  };

  return (
    <section className="explore" id="explore">
      <div className="container">
        <h2>Explore <span>Plants</span></h2>
        <div className="plant-grid">
          {allPlants.slice(0, visiblePlants).map(plant => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <Link to={`/plant/${plant.id}`} className="btn">Learn More</Link>
            </div>
          ))}
        </div>
        {visiblePlants < allPlants.length && (
          <div className="load-more">
            <Link to="/all-plants" className="btn btn-secondary">View All Plants</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExplorePlants;

