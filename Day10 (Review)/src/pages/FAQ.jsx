import React from 'react';
import '../assets/css/Faq.css'; 
import NavbarHome from '../Components/NavbarHome';
import Footer from './Footer';

function Faq() {
  const faqs = [
    {
      question: 'How do I start investing online?',
      answer: 'To start investing online, you can open an account with an online brokerage platform, fund your account, and begin selecting investments that align with your financial goals and risk tolerance.'
    },
    {
      question: 'What types of investments are available online?',
      answer: 'Online investment platforms typically offer a range of investment options, including stocks, bonds, mutual funds, ETFs (Exchange-Traded Funds), real estate, and more.'
    },
    {
      question: 'Is online investing safe?',
      answer: 'Online investing can be safe if you choose reputable and secure brokerage platforms. Ensure that the platform has strong security measures, including encryption and two-factor authentication.'
    },
    {
      question: 'What is diversification in investing?',
      answer: 'Diversification involves spreading your investments across different asset classes to reduce risk. It can help protect your portfolio from the impact of poor performance in any single investment.'
    },
  ];

  return (
    <>
    <NavbarHome/>
    <div className="investment-faq">
      <h1> Frequently Asked Questions (FAQ)</h1>
      <br></br>
      <br></br>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default Faq;