import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import "./styles.scss";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="background">
      <h1>Contact Form</h1>
        <form class="form" ref={form} onSubmit={sendEmail}>
          <input
            class="name formEntry"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <input
            class="phone formEntry"
            type="phone"
            name="user_phone"
            placeholder="Phone"
          />
          <input
            class="email formEntry"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            class="message formEntry"
            name="message"
            placeholder="Message"
          />
          <input class="submit formEntry" type="submit" value="Send Message" />
          {/* <Button onClick={() => {alert('Me clickeaste!')}} type="submit">Send Message</Button> */}
        </form>
    </div>
  );
};

export default ContactForm;
