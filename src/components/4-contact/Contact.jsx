import "./contact.css";
import React from "react";

import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation//email.json";

import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqbbaek");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {!state.succeeded ? (
            <button className="submit" disabled={state.submitting}>
              {state.submitting ? "Submiting...." : "submit"}
            </button>
          ) : (
            <p className="message flex">
              <Lottie
                loop={false}
                className="doneAnimation"
                animationData={doneAnimation}
              />{" "}
              Your message has been sent successfuly 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie className="emailAnimation" animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
