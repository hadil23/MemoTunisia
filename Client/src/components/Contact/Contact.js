import React from "react";
import "./style.css";
import { Button, Input } from "@material-ui/core";
export default function Contact() {
  return (
    <div className="Container">
      <div className="contact">
        <h3 className="h33">Contact Us</h3>
        <div className="contact-content">
          <div className="contact-left">
            <p>
              <span className="spanCon">ADDRESS </span>
              <br />
              08 Rue Newton, Ariana <br /> 2088 Tunisia
            </p>
            <br />

            <p>
              <span className="spanCon">PHONE</span>
              <br />
              +216 123 456 789
            </p>
            <br />

            <p>
              <span className="spanCon">EMAIL</span>
              <br />
              Memo.Contactini@gmail.com
            </p>
          </div>

          <div className="contact-right">
            <form
              action="https://formsubmit.co/Memo.Contactini@gmail.com"
              method="POST"
              className="contact-form"
            >
              <input
                style={{
                  fontSize: "1rem",
                }}
                type="text"
                name="name"
                required
                className="contact-form-text"
                placeholder="Your name"
              />
              <input
                style={{
                  fontSize: "1rem",
                }}
                type="email"
                name="email"
                required
                className="contact-form-text"
                placeholder="Your email"
              />
              <input
                style={{
                  fontSize: "1rem",
                }}
                type="text"
                name="phone"
                required
                className="contact-form-text"
                placeholder="Your phone"
              />
              <textarea
                style={{
                  fontSize: "1rem",
                }}
                className="contact-form-text"
                name="msg"
                required
                placeholder="Your message"
              ></textarea>
              <Button
                style={{
                  backgroundColor: "#7fb986",
                  fontSize: "1.3rem",
                }}
                variant="contained"
                type="submit"
                className="contact-form-btn"
                value="Send"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
