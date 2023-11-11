import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = document.getElementById('button');
    const user_name = document.getElementById('user_name');
    const user_email = document.getElementById('user_email');
    const description = document.getElementById('message');

    emailjs.sendForm('service_rxk2nr8', 'template_0kv42on', form.current, 'p3zkL-2Zmd6sN7Zge')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    btn.value = 'Email Sent!';
    user_name.value = '';
    user_email.value = '';
    description.value = '';
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <h3>Get in Touch</h3>

        <input type="text" name="user_name" id="user_name" placeholder="Name" required/>

        <input type="email" name="user_email" id="user_email" placeholder="Email" required/>

        <input type="text" name="message" id="message" placeholder="How may I help you?" required/>

        <input type="submit" id="button" value="Send Email"/>
      </form>
    </div>
  );
}
