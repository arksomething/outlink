import React from 'react';
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <h1>Product</h1>
      <div>
        <p>
          OutLink allows you to save and generate personalized emails and email addresses from LinkedIn profiles for free.
        </p>
        <h2>We are for:</h2>
        <ul>
          <li>Networking</li>
          <li>Finance Recruiting</li>
          <li>Outbound Sales/Marketing</li>
          <li>Sourcing</li>
        </ul>
        <h2>Use OutLink to:</h2>
        <ul>
          <li>Never misspell a name or firm ever again</li>
          <li>Automatically generate emails tailored to the LinkedIn profile</li>
          <li>Find validated emails with a click of a button</li>
          <li>Create AI-generated follow-ups inside Gmail</li>
          <li>Manually edit emails inside LinkedIn</li>
          <li>Keep track of leads at scale</li>
          <li>Quickly copy emails into whatever email provider you use</li>
        </ul>
        <p>
          OutLink uses the best AI models to generate relevant emails. Our AI agents are given all the context inside the LinkedIn webpage. We provide custom, tested prompts and allow you to write your own. Easily change the email’s tone, length, or structure.
        </p>
        <p>
          Whether you’re looking to expand your professional network, recruit top talent, close deals, or connect with potential clients, OutLink ensures your outreach is professional, personalized, and efficient. We make reaching out faster.
        </p>
        <p>OutLink is actively developed and will receive new features.</p>
        <p><strong>Download now!</strong></p>
      </div>

    </div>
  );
}

export default Product; 