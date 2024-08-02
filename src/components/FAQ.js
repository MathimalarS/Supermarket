import React, { useState } from 'react';
import '../assets/css/FAQ.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h3 onClick={toggleAnswer} className={isOpen ? 'open' : ''}>
        {question}
      </h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      section: 'General',
      items: [
        {
          question: 'What is Eco Mart?',
          answer: 'Eco Mart is your go-to supermarket app for all your grocery needs. We offer a wide range of products, from fresh produce to household essentials, delivered straight to your doorstep.'
        },
        {
          question: 'How can I contact customer service?',
          answer: 'You can reach our customer service team through the \'Contact Us\' section in the app, via email at contact@ecomart.com, or by calling our hotline at +91 98327 37283.'
        }
      ]
    },
    {
      section: 'Account',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account by clicking on the \'Sign Up\' button on the login page and filling in the required details.'
        },
        {
          question: 'I forgot my password. What should I do?',
          answer: 'Click on the \'Forgot Password?\' link on the login page and follow the instructions to reset your password.'
        }
      ]
    },
    {
      section: 'Orders',
      items: [
        {
          question: 'How do I place an order?',
          answer: 'Browse our products, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes, you can track your order in real-time through the \'My Orders\' section in the app.'
        }
      ]
    }
  ];

  return (
    <div className='faqbg'>
    <div className="faq-container" >
      <h1>Frequently Asked Questions (FAQ)</h1>
      {faqData.map((section, index) => (
        <div className="faq-section" key={index}>
          <h2>{section.section}</h2>
          {section.items.map((item, idx) => (
            <FAQItem key={idx} question={item.question} answer={item.answer} />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
