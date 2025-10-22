import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [result, setResult] = useState("");

  const conditionalButton = formInputs.email === "" || formInputs.name === "" || formInputs.message === "";
  const conditionalButtonStyle = !conditionalButton ? "enable" : "disable";


  function handleNameChange(event) {
    setFormInput({...formInputs, name: event.target.value});
  }
  function handleEmailChange(event) {
    setFormInput({...formInputs, email: event.target.value});
  }
  function handleMessageChange(event) {
    setFormInput({...formInputs, message: event.target.value})
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (formInputs) {
      return setResult("Success!");
    }
  }

  return (
    <div id="contact" className='contact'>
      <h1 className='text-2xl text-center font-bold'>Contact</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse!</p>
      <div className="contact-me">
        <div className="info-section">
          <div className="info-rows">
            <i class="fa-solid fa-phone"></i>
            <p>+123 456 7890</p>
          </div>
          <div className="info-rows">
            <i class="fa-solid fa-envelope"></i>
            <p>loxydgistori420@gmail.com</p>
          </div>
          <div className="info-rows">
            <i class="fa-solid fa-location-dot"></i>
            <p>Blida, Meftah, Hey 200 Masken</p>
          </div>
        </div>
        <form action="post" onSubmit={handleSubmitForm}>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='name' id='name' onChange={handleNameChange} value={formInputs.name} required/>
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='email' id='email' onChange={handleEmailChange} value={formInputs.email} required/>
          </div>
          <div className="input">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" placeholder='message' onChange={handleMessageChange} value={formInputs.message} required></textarea>
          </div>
          <div className="btn">
            <button type="submit" className={conditionalButtonStyle} disabled={conditionalButton}>Send Message</button>
          </div>
          <p className={`message text-center ${result == "Success" ? 'bg-red-300' : 'bg-green-300'} ${!result ? 'none': ''}`}>{result}</p>
        </form>
      </div>
    </div>
  )
}

export default Contact