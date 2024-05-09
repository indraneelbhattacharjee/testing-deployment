// ContactUs.js


import backgroundImage from './about-us.jpg';

export const ContactUs = (props) => {
  return (
    <header>
      <div>
        <div className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="header">
            <h1>Contact Us</h1>
          </div>
          <div className="content">
            <div className="form">
              <label htmlFor="fname">Enter Name:</label>
              <input className="input" type="text" id="fname" name="fname" />

              <label htmlFor="email">Enter Email:</label>
              <input className="input" type="text" id="email" name="email" />

              <label htmlFor="message">Enter Message</label>
              <textarea className="input py-7" id="message" name="message" />

              <div className="button-container">
                <button className="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ContactUs;