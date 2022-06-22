import React from 'react'
import "../Contact/Contact.css"
import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai"
// import { useRef } from "react"
// import emailjs from "emailjs"

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => { 
  //  e.preventDefault();

  //  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.cu rrent, "YOUR_USER_ID")
  //  .then((result) => {
  //    console.log(result.text);
  //  }, (error) => {
  //    console.log(error.text);
  //  });
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

     <div className='container contact__container'>
       <div className='contact__options'>
         <article className='contact__option'>
           <AiOutlineMail className='contact__option-icon' />
         <h4>Email</h4>
         <h5>victoria.casalf@gmail.com</h5>
         <a href='mailto:victoria.casalf@gmail.com'>Send a Messege</a>
         </article>
         <article className='contact__option'>
           <AiOutlineWhatsApp className='contact__option-icon'/>
         <h4>WhatsApp</h4>
         <a href='https://api.whatsapp.com/send?phone=+5493816677788' target="__blank">Send a Messege</a>
         </article>
       </div>
       {/*End of contact options*/}
       <form action=''>
         <input type="text" name="name" placeholder='Your Full Name' required />
         <input type="email" name="email" placeholder='Your Email' required />
         <textarea name="message" rows="7" placeholder="Your Message" required />
         <button type='submit' className='btn btn-primary'>Send a Message</button>
       </form>
     </div>
    </section>
  )
}

export default Contact