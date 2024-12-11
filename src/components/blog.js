import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './styles/blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch blog posts
    setPosts([
      {
        id: 1,
        title: "Easy-to-Care-for Indoor Plants for Beginners",
        excerpt: "Discover the best low-maintenance plants perfect for new plant parents.",
        date: "2023-05-15",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Male_Indoor_Plants_732x549-thumbnail-732x549.jpg",
        link: "https://fgsdurham.com/blog/easy-care-houseplants/" // Link to the detailed blog
      },
      {
        id: 2,
        title: "Create a Stunning Plant Wall in Your Home",
        excerpt: "Learn the steps to design and install a beautiful living wall of plants.",
        date: "2023-05-10",
        image: "https://hips.hearstapps.com/hmg-prod/images/coverimage-jpg-6717ce26637b2.jpg?crop=1.00xw:0.702xh;0,0.188xh&resize=980:*",
        link: "https://www.housebeautiful.com/lifestyle/gardening/a61914883/create-a-plant-wall-guide/" // Link to the detailed blog
      },
      {
        id: 3,
        title: "The Benefits of Indoor Plants: More Than Just Decor",
        excerpt: "Explore the many ways indoor plants can improve your health and well-being.",
        date: "2023-05-05",
        image: "https://zerowastefamily.com/wp-content/uploads/2023/10/dreamstime_xxl_65987880-768x509.jpeg",
        link: "https://zerowastefamily.com/benefits-houseplants-decoration" // Link to the detailed blog
      },
      {
        id: 4,
        title: "How to Propagate Plants: A Beginner's Guide",
        excerpt: "Learn how to propagate your favorite plants and create new ones at home.",
        date: "2023-04-25",
        image: "https://images.squarespace-cdn.com/content/v1/58cfd3b3ff7c501ac4387b35/1599590702052-L8KBMP381666OJMWI25N/9-8Propogation+-+1.jpg?format=2500w",
        link: "https://www.wildinteriors.com/blog/how-to-propagate-plants-a-beginners-guide"
      },
      {
        id: 5,
        title: "The Top 10 Air-Purifying Plants for Your Home",
        excerpt: "Discover the best plants that help purify the air in your home and office.",
        date: "2023-04-18",
        image: "https://hips.hearstapps.com/hmg-prod/images/houseplants-1616781991.jpg?crop=0.668xw:1.00xh;0.204xw,0&resize=640:*",
        link: "https://nurserylive.com/blogs/top-10-plants/top-10-air-purifying-plants-to-keep-your-air-clean"
      },
      {
        id: 6,
        title: "How to Water Your Plants Like a Pro",
        excerpt: "Tips and tricks for watering your plants effectively, no matter the type.",
        date: "2023-04-12",
        image: "https://cdn11.bigcommerce.com/s-1b9100svju/product_images/uploaded_images/ad-options-articles-84-.jpg",
        link: "https://www.longfield-gardens.com/article/how-to-water-your-plants"
      },
      {
        id: 7,
        title: "Choosing the Right Pots for Your Plants",
        excerpt: "A guide on selecting the perfect pots for different types of plants.",
        date: "2023-04-01",
        image: "https://www.thesill.com/cdn/shop/articles/180306_The_Sill_7740.jpg?v=1526917000&width=1100",
        link: "https://www.thesill.com/blogs/plants-101/how-to-choose-right-pot-houseplants?srsltid=AfmBOoq0F7LWt8Mn1XX_X383yrRVfzF-Lx3clZyCp0Cnq1Vg8Df8GenG"
      },
      {
        id: 8,
        title: "The Best Low-Light Plants for Your Home",
        excerpt: "Find out which plants thrive in low-light conditions for those darker spots in your home.",
        date: "2023-03-28",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/12/10/0/CI_Costa-Farms-Spathiphyllum.jpg.rend.hgtvcom.791.1055.suffix/1449808051462.jpeg",
        link: "https://www.hgtv.com/outdoors/flowers-and-plants/houseplants/14-indoor-plants-for-low-light-pictures"
      },
      {
        id: 9,
        title: "How to Care for Succulents: Tips for Success",
        excerpt: "Essential care tips for keeping your succulents happy and healthy.",
        date: "2023-03-15",
        image: "https://media.architecturaldigest.com/photos/582cb3dcefb84d105bd0223d/16:9/w_2240,c_limit/succulents-care-04.jpg",
        link: "https://www.architecturaldigest.com/story/how-to-care-for-succulents"
      },
      {
        id: 10,
        title: "Top 5 Houseplants for Improving Mental Health",
        excerpt: "Learn how houseplants can boost your mood and improve mental health.",
        date: "2023-03-10",
        image: "https://www.houseplant.co.uk/cdn/shop/articles/plant-mental-health.png?v=1709809741",
        link: "https://www.houseplant.co.uk/blogs/indoor-plant-care/what-are-the-best-indoor-plants-for-improving-mental-health-and-well-being"
      },
      {
        id: 11,
        title: "How to Create a Green Oasis in Your Apartment",
        excerpt: "Turn your apartment into a lush, green sanctuary with these easy steps.",
        date: "2023-03-05",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/project%20prism%2Fcolor%20search%20archive%2F1135c33c4149a6811d862c1c15fbcfe6f5896d1d",
        link: "https://www.apartmenttherapy.com/indoor-garden-ideas-diy-plant-holders-255328"
      },
      {
        id: 12,
        title: "Understanding Plant Toxicity: Which Plants Are Safe for Pets?",
        excerpt: "Learn which common houseplants are toxic to pets and which are pet-friendly.",
        date: "2023-02-28",
        image: "https://www.thesill.com/cdn/shop/articles/the_sill_198.jpg?v=1529069785&width=2200",
        link: "https://www.thesill.com/blogs/care-miscellaneous/plant-care-plant-toxicity?srsltid=AfmBOoqZAnv9ALNK2m6kyCWRCCmHBJfWPrhVtccf20V5J6Skv1Q186_J"
      }
    ]);
  }, []);

  return (
    <div className="blog">
      <div className="container">
        <h1>The Plant Blog</h1>
        <div className="blog-posts">
          {posts.map(post => (
            <Link key={post.id} to={post.link} className="blog-post-link" target='_blank'>
              <div className="blog-post">
                <img src={post.image} alt={post.title} className="post-image" />
                <h2>{post.title}</h2>
                <p className="post-date">{post.date}</p>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
