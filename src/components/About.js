import React, { useEffect, useRef } from 'react';
import mission from "../assets/img/mission.jpg";
import value from "../assets/img/values.jpg";
import journey from "../assets/img/journey.jpg";
import community from "../assets/img/community.jpg";
import Footer from './Footer';

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
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        } else {
          entry.target.style.opacity = '0';
          entry.target.style.transform = entry.target.classList.contains('image-left') ? 'translateX(-100px)' : 'translateX(100px)';
          entry.target.style.boxShadow = 'none';
        }
      });
    }, {
      threshold: 0.1
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
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
    <div style={{ backgroundColor: '#f4f4f4', padding: '20px 0' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        animation: 'slideIn 1s ease-out'
      }}>
        <h1 style={{ fontSize: '2.5em', color: '#5a8974', marginBottom: '10px', animation: 'fadeIn 2s' }}>About Us</h1>
        <h2 style={{ fontSize: '1.5em', color: '#1e4231', marginBottom: '30px', animation: 'fadeIn 2s 1s' }}>Discover Our Story</h2>
        <div style={{ marginTop: '30px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '20px 0',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.666)',
            transition: 'transform 0.7s, box-shadow 0.3s',
            animation: 'slideInLeft 1s ease-out forwards',
          }}>
            <div style={{ flex: '0 0 auto', padding: '20px', order: 1, marginRight: '20px' }}>
              <img
                ref={el => imagesRef.current.push(el)}
                src={mission}
                alt="Our Mission"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '10px',
                  transition: 'transform 1s, opacity 1s ease-in-out',
                  opacity: '0',
                  transform: 'translateX(-100px)',
                  boxShadow: 'none',
                }}
                className="image-left"
              />
            </div>
            <div style={{ flex: '1', padding: '20px', order: 2 }}>
              <h3 style={{ color: '#2d6a4f', margin: '20px 0 10px 0' }}>Our Mission</h3>
              <p style={{ color: '#555', textAlign: 'center', lineHeight: '1.5' }}>
                At Eco Mart, our mission is to provide the highest quality products with the least environmental impact. We believe in sustainable living and strive to offer a wide range of eco-friendly products to our customers. Our commitment to the planet is reflected in every aspect of our operations, from sourcing to packaging and delivery.
                We work closely with ethical suppliers who share our values of sustainability and social responsibility. By prioritizing organic and locally sourced products, we reduce our carbon footprint and support the well-being of our communities.
                Innovation is at the heart of what we do. We constantly seek out new, sustainable technologies and practices to enhance our product offerings and improve our environmental impact. Our goal is to empower our customers to make informed, eco-conscious choices that benefit both their health and the planet.
                Education and awareness are crucial components of our mission. We provide resources and information to help our customers understand the importance of sustainability and how their choices can make a difference. Through workshops, events, and online content, we aim to inspire a community of environmentally conscious consumers.
                Together, we can create a healthier, more sustainable future. Join us at Eco Mart in our mission to promote green living and protect the environment for generations to come.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '20px 0',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.666)',
            transition: 'transform 0.7s, box-shadow 0.3s',
            animation: 'slideInRight 1s ease-out forwards',
            animationDelay: '0.2s'
          }}>
            <div style={{ flex: '1', padding: '20px', order: 1 }}>
              <h3 style={{ color: '#2d6a4f', margin: '20px 0 10px 0' }}>Our Values</h3>
              <ul style={{ color: '#555', textAlign: 'left', marginLeft: '50px' }}>
                <li>Integrity in our business practices and relationships.</li>
                <li>Sustainability in every product and process.</li>
                <li>Community engagement and support.</li>
                <li>Transparency with our customers and partners.</li>
                <li>Innovation in eco-friendly solutions.</li>
              </ul>
            </div>
            <div style={{ flex: '0 0 auto', padding: '20px', order: 2, marginLeft: '20px' }}>
              <img
                ref={el => imagesRef.current.push(el)}
                src={value}
                alt="Our Values"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '10px',
                  transition: 'transform 1s, opacity 1s ease-in-out',
                  opacity: '0',
                  transform: 'translateX(100px)',
                  boxShadow: 'none',
                }}
                className="image-right"
              />
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '20px 0',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.666)',
            transition: 'transform 0.7s, box-shadow 0.3s',
            animation: 'slideInLeft 1s ease-out forwards',
            animationDelay: '0.4s'
          }}>
            <div style={{ flex: '0 0 auto', padding: '20px', order: 1, marginRight: '20px' }}>
              <img
                ref={el => imagesRef.current.push(el)}
                src={journey}
                alt="Our Journey"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '10px',
                  transition: 'transform 1s, opacity 1s ease-in-out',
                  opacity: '0',
                  transform: 'translateX(-100px)',
                  boxShadow: 'none',
                }}
                className="image-left"
              />
            </div>
            <div style={{ flex: '1', padding: '20px', order: 2 }}>
              <h3 style={{ color: '#2d6a4f', margin: '20px 0 10px 0' }}>Our Journey</h3>
              <p style={{ color: '#555', textAlign: 'center', lineHeight: '1.5' }}>
                From our humble beginnings to becoming a leader in the sustainable market, our journey has been fueled by a passion for making a positive impact. We continuously evolve to meet the changing needs of our customers and the planet. Our commitment to sustainability has driven us to innovate and improve, ensuring we remain at the forefront of the green movement. Each milestone in our journey has been a step towards creating a more sustainable and eco-conscious world.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '20px 0',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.666)',
            transition: 'transform 0.7s, box-shadow 0.3s',
            animation: 'slideInRight 1s ease-out forwards',
            animationDelay: '0.6s'
          }}>
            <div style={{ flex: '1', padding: '20px', order: 1 }}>
              <h3 style={{ color: '#2d6a4f', margin: '20px 0 10px 0' }}>Community Engagement</h3>
              <p style={{ color: '#555', textAlign: 'center', lineHeight: '1.5' }}>
                Our community is at the heart of everything we do. We are proud to support and engage with local communities through various initiatives and partnerships. Whether it's through our products, educational programs, or charitable efforts, we are committed to making a positive difference in the lives of those around us.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', padding: '20px', order: 2, marginLeft: '20px' }}>
              <img
                ref={el => imagesRef.current.push(el)}
                src={community}
                alt="Community Engagement"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '10px',
                  transition: 'transform 1s, opacity 1s ease-in-out',
                  opacity: '0',
                  transform: 'translateX(100px)',
                  boxShadow: 'none',
                }}
                className="image-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Aboutus;
