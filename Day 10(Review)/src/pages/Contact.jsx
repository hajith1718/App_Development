import React, { useState } from 'react';
import "../assets/css/Contact.css"
import NavbarHome from '../Components/NavbarHome';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., send the data to a server.
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
        <NavbarHome/>
        <div className='main'>
    <div className="contact-us">
      <h1>Contact Us ☎</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <br></br>
    <br></br>
    <div className='Info'>
    <p>CALL US 📞:1800 120 3699<br></br>
     <div className='ph'>+91 44 27417000<br></br>
     +91 44 27417777</div></p>
    <p>EMAIL US ✉:moneymakers@gmail.com</p>
    </div>
    </div>

    <Footer/>
    </div>
  );
}

export default Contact;
