import React from 'react';
import { useParams } from 'react-router-dom';

// Plant data
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
  {
    id: 5,
    name: "Aloe Vera",
    description: "A succulent plant known for its healing properties.",
    image: "https://files.nccih.nih.gov/aloe-vera-steven-foster-square.jpg",
    careInstructions: "Keep in bright, indirect sunlight and water sparingly.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water every 2-3 weeks.",
  },
  {
    id: 6,
    name: "Peace Lily",
    description: "A popular indoor plant with elegant white flowers.",
    image: "https://seed2plant.in/cdn/shop/files/SPR-variegated-peace-lily-domino-7097188-hero-A-422d7faa152d42d3a4030ff8a2a33768.jpg?v=1692362762",
    careInstructions: "Keep soil moist but not soggy and avoid direct sunlight.",
    sunlightNeeds: "Low to medium, indirect sunlight.",
    wateringFrequency: "Water weekly.",
  },
  {
    id: 7,
    name: "Spider Plant",
    description: "A hardy plant that’s easy to grow and propagate.",
    image: "https://img.crocdn.co.uk/images/products2/pl/20/00/04/40/pl2000044095_card2_lg.jpg",
    careInstructions: "Water when the soil is dry to the touch and avoid overwatering.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water every 1-2 weeks.",
  },
  {
    id: 8,
    name: "Jade Plant",
    description: "A long-lived succulent that symbolizes good luck.",
    image: "https://m.media-amazon.com/images/I/41qBZDiSmTL._AC_.jpg",
    careInstructions: "Water when the soil is dry, and keep in bright light.",
    sunlightNeeds: "Bright, direct sunlight.",
    wateringFrequency: "Water every 2-3 weeks.",
  },
  {
    id: 9,
    name: "Rubber Plant",
    description: "A bold plant with large, glossy leaves.",
    image: "https://www.inntinn.in/cdn/shop/products/rubber-plant-tall-inntinn-in-1.jpg?v=1714233848",
    careInstructions: "Wipe leaves regularly and keep in bright, indirect light.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water weekly.",
  },
  {
    id: 10,
    name: "Calathea",
    description: "A decorative plant with vibrant, patterned leaves.",
    image: "https://www.cultureshoppe.com/cdn/shop/products/calathea-medallion_2048x.jpg?v=1647514431",
    careInstructions: "Keep soil moist and avoid cold drafts.",
    sunlightNeeds: "Low to medium, indirect sunlight.",
    wateringFrequency: "Water every 1-2 weeks.",
  },
  {
    id: 11,
    name: "Dracaena",
    description: "A low-maintenance plant with dramatic foliage.",
    image: "https://exoticflora.in/cdn/shop/products/EF40.jpg?v=1570723381",
    careInstructions: "Let soil dry between waterings and provide filtered light.",
    sunlightNeeds: "Filtered or low light.",
    wateringFrequency: "Water every 2-3 weeks.",
  },
  {
    id: 12,
    name: "ZZ Plant",
    description: "A nearly indestructible plant perfect for beginners.",
    image: "https://www.houseplant.co.uk/cdn/shop/files/ZZ_Plant_Tropical_Houseplant_grande.jpg?v=1733490189",
    careInstructions: "Water when the soil has dried completely.",
    sunlightNeeds: "Low to bright, indirect sunlight.",
    wateringFrequency: "Water every 2-3 weeks.",
  },
  {
    id: 13,
    name: "Boston Fern",
    description: "A classic fern with lush, arching fronds.",
    image: "https://urbano.in/wp-content/uploads/2021/12/Boston-Fern-Plant.png",
    careInstructions: "Keep soil damp and maintain high humidity levels.",
    sunlightNeeds: "Indirect sunlight or partial shade.",
    wateringFrequency: "Water 2-3 times a week.",
  },
  {
    id: 14,
    name: "Areca Palm",
    description: "A tropical plant with feathery fronds.",
    image: "https://masonhome.in/cdn/shop/files/IMG_8163.jpg?v=1723103376",
    careInstructions: "Water when the topsoil feels dry and provide bright light.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water weekly.",
  },
  {
    id: 15,
    name: "Bamboo Palm",
    description: "A compact plant perfect for purifying indoor air.",
    image: "https://geturpet.com/wp-content/uploads/2021/01/Bamboo-Palm-1.jpg",
    careInstructions: "Keep soil moist but not soggy.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water every 1-2 weeks.",
  },
  {
    id: 16,
    name: "Lucky Bamboo",
    description: "A symbol of luck and prosperity.",
    image: "https://www.ugaoo.com/cdn/shop/files/1_1d54ccfe-9466-424c-8c8f-1f56eca0f58a.jpg?v=1726304492",
    careInstructions: "Place in filtered water and keep in bright light.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Change water every 1-2 weeks.",
  },
  {
    id: 17,
    name: "Croton",
    description: "A colorful plant with bold, variegated leaves.",
    image: "https://wildroots.in/wp-content/uploads/2020/07/nurserylive-croton-variegatum-captain-kidd-codiaeum-variegatum-captain-kidd-plant.jpg",
    careInstructions: "Water when soil is dry to the touch and keep in bright light.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water every 1-2 weeks.",
  },
  {
    id: 18,
    name: "Succulent Mix",
    description: "A collection of small, drought-tolerant succulents.",
    image: "https://wanderpot.com/wp-content/uploads/WP-Lush-Arial.jpg",
    careInstructions: "Allow soil to dry out completely before watering.",
    sunlightNeeds: "Bright, direct sunlight.",
    wateringFrequency: "Water every 2-4 weeks.",
  },
  {
    id: 19,
    name: "Philodendron",
    description: "A versatile plant with heart-shaped leaves.",
    image: "https://rukminim2.flixcart.com/image/850/1000/l3lx8cw0/plant-sapling/s/i/s/no-perennial-yes-philodendron-plant-p5-1-elite-green-original-imagep2zyashtgaz.jpeg?q=90&crop=false",
    careInstructions: "Keep soil moist and avoid direct sunlight.",
    sunlightNeeds: "Bright, indirect sunlight.",
    wateringFrequency: "Water weekly.",
  },
  {
    id: 20,
    name: "Cactus",
    description: "A resilient plant ideal for dry conditions.",
    image: "https://plantorbit.com/cdn/shop/collections/Bunny-Ear-Cactus-Opuntia-microdasys.jpg?v=1712338890",
    careInstructions: "Place in bright light and water sparingly.",
    sunlightNeeds: "Bright, direct sunlight.",
    wateringFrequency: "Water every 4-6 weeks.",
  },
];

function PlantDetails() {
  const { id } = useParams();
  const plant = allPlants.find((p) => p.id === parseInt(id));

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <section className="plant-details">
      <div className="container">
        <h2>{plant.name}</h2>
        <div className="plant-info">
          <img src={plant.image} alt={plant.name} />
          <div className="plant-description">
            <p>{plant.description}</p>
            <h3>Care Instructions</h3>
            <p>{plant.careInstructions}</p>
            <h3>Sunlight Needs</h3>
            <p>{plant.sunlightNeeds}</p>
            <h3>Watering Frequency</h3>
            <p>{plant.wateringFrequency}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlantDetails;
