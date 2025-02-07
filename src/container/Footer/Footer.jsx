import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Footer.scss";
import Modal from "./Modal";

const Footer = () => {
  const position = [6.5296364, 3.3886894];
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if ((name, email, message)) {
  //     setLoading(true);

  //     emailjs
  //       .sendForm(
  //         "service_ogzligc",
  //         "template_ow8wc9q",
  //         form.current,
  //         "wKxlHdJ3GL6ipdQNE"
  //       )
  //       .then(() => {
  //         setLoading(false);
  //         setIsFormSubmitted(true);
  //       });

  //   } else {
  //     setModalOpened(true);
  //   }
  // };

  const closeModal = () => {
    setModalOpened(false);
  };

  return (
    <>
      <h2 className="head-text">Let's talk business</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:elegbede.raymond@gmail.com" className="p-text">
            elegbede.raymond@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +2348165941670" className="p-text">
            +2348165941670
          </a>
        </div>
      </div>

      {modalOpened && <Modal closeModal={closeModal} />}
      <div id="map">
        <MapContainer
          className="map-container"
          style={{ height: "400px", width: "100%" }}
          center={position}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>monds lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app-flex" ref={form}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              required
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            <button
              ref={form}
              type="button"
              className="p-text"
              // onClick={handleSubmit}
            >
              {loading ? "Sending message" : "Send Message"}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thanks for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact");
