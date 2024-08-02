import React, { useEffect, useRef } from 'react';
import '../assets/css/Aboutus.css';
import mission from "../assets/img/mission.jpg";
import value from "../assets/img/values.jpg";
import journey from "../assets/img/journey.jpg";
import community from "../assets/img/community.jpg";
import Navbar from './Navbar.js';
import { Link } from 'react-router-dom';

function Aboutus() {
  const imagesRef = useRef([]);

  useEffect(() => {
    document.body.classList.add('aboutus-page');
    return () => document.body.classList.remove('aboutus-page');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1 // Adjust this value based on when you want the transition to start
    });

    imagesRef.current.forEach(img => {
      if (img) observer.observe(img);
    });

    return () => {
      imagesRef.current.forEach(img => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className='bg'>
      <div className="aboutus-container">
        <h1 className="header">About Us</h1>
        <h2 className="sub-header">Discover Our Story</h2>
        <div className="aboutus-content">
          <div className="aboutus-section zigzag left">
            <div className="image-container-left">
              <img ref={el => imagesRef.current.push(el)} src={mission} alt="Our Mission" />
            </div>
            <div className="text-container">
              <h3>Our Mission</h3>
              <p>
              At Eco Mart, our mission is to provide the highest quality products with the least environmental impact. We believe in sustainable living and strive to offer a wide range of eco-friendly products to our customers. Our commitment to the planet is reflected in every aspect of our operations, from sourcing to packaging and delivery.
              We work closely with ethical suppliers who share our values of sustainability and social responsibility. By prioritizing organic and locally sourced products, we reduce our carbon footprint and support the well-being of our communities.
              Innovation is at the heart of what we do. We constantly seek out new, sustainable technologies and practices to enhance our product offerings and improve our environmental impact. Our goal is to empower our customers to make informed, eco-conscious choices that benefit both their health and the planet.
              Education and awareness are crucial components of our mission. We provide resources and information to help our customers understand the importance of sustainability and how their choices can make a difference. Through workshops, events, and online content, we aim to inspire a community of environmentally conscious consumers.
              Together, we can create a healthier, more sustainable future. Join us at Eco Mart in our mission to promote green living and protect the environment for generations to come.
              </p>
            </div>
          </div>
          <div className="aboutus-section zigzag right">
            <div className="text-container">
              <h3>Our Values</h3>
              <ul className="values">
                <li>Integrity in our business practices and relationships.</li>
                <li>Sustainability in every product and process.</li>
                <li>Community engagement and support.</li>
                <li>Transparency with our customers and partners.</li>
                <li>Innovation in eco-friendly solutions.</li>
              </ul>
            </div>
            <div className="image-container-right">
              <img ref={el => imagesRef.current.push(el)} src={value} alt="Our Values" />
            </div>
          </div>
          <div className="aboutus-section zigzag left">
            <div className="image-container-left">
              <img ref={el => imagesRef.current.push(el)} src={journey} alt="Our Journey" />
            </div>
            <div className="text-container">
              <h3>Our Journey</h3>
              <p>
                From our humble beginnings to becoming a leader in the sustainable market, our journey has been fueled by a passion for making a positive impact. We continuously evolve to meet the changing needs of our customers and the planet. Our commitment to sustainability has driven us to innovate and improve, ensuring we remain at the forefront of the green movement. Each milestone in our journey has been a step towards creating a more sustainable and eco-conscious world.
              </p>
            </div>
          </div>
          <div className="aboutus-section zigzag right">
            <div className="text-container">
              <h3>Our Community</h3>
              <p>
                We believe in giving back to the community that supports us. Through various initiatives and partnerships, we work to create a better future for all. Eco Mart is dedicated to fostering a sense of community and shared responsibility. We regularly collaborate with local organizations, schools, and environmental groups to promote sustainability and environmental stewardship. Our community outreach programs include educational workshops, clean-up drives, and tree-planting events, all aimed at raising awareness and encouraging eco-friendly practices. We also support local artisans and farmers by offering their products in our store, thereby promoting local economies and reducing carbon footprints. Additionally, a portion of our profits is reinvested into community projects that focus on environmental conservation and social well-being. By engaging with our community, we aim to inspire collective action and make a tangible impact. Join us in making a difference, one step at a time, as we work together towards a sustainable and thriving future for all.
              </p>
            </div>
            <div className="image-container-right">
              <img ref={el => imagesRef.current.push(el)} src={community} alt="Our Community" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Aboutus;
