import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const ContactForm = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zns74gs",
        "template_mytv5jd",
        e.target,
        "TNUAq3IagJxCNyN3V"
      )
      .then(
        () => {
          alert("Gracias por su consulta, nos comunicaremos a la brevedad.");
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    e.target.reset();
  }

  return (
    <div id={'contact-us'}>
      <div className="background">
        <h1>¡Dejanos tu consulta!</h1>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            className="name formEntry"
            type="text"
            name="user_name"
            placeholder="Nombre y Apellido"
          />
          <input
            className="phone formEntry"
            type="phone"
            name="user_phone"
            placeholder="Teléfono"
            required
          />
          <input
            className="email formEntry"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <textarea
            className="message formEntry"
            name="message"
            placeholder="Tu consulta..."
          />
          <input className="submit formEntry" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
