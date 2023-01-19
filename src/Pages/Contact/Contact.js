import React, { useCallback, useState } from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  // const [invalid, setInvalid] = useState(false)

  const sendEmail = useCallback(() => {
    // TODO send email
    console.log(firstName, lastName, email, subject, body);
  }, [body, email, firstName, lastName, subject]);

  const promptInvalid = useCallback(() => {}, []);

  return (
    <div className="Contact-Container">
      <div className="Contact-info">
        <div className="Contact-1">
          <div className="Contact-Title">Let's Chat!</div>
          <div className="Contact-Description">
            Want to learn more? Want us to build you a beautiful website?
          </div>
        </div>
        <div className="Contact-2">
          <div className="Contact-check"> &gt; check out our socials! </div>
          <div className="Contact-Socials">
            <div className="Contact-linkedin">
              {" "}
              <a
                href="https://www.linkedin.com/company/western-dev-society/?originalSubdomain=ca"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> <p>Western Developer's Society</p>
              </a>
            </div>
            <div className="Contact-insta">
              <a
                href="https://www.instagram.com/westerndevsociety/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram /> <p>@westerndevsociety</p>
              </a>
            </div>
            <div className="Contact-facebook">
              {" "}
              <a
                href="https://www.facebook.com/westerndevsociety/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare /> <p>@westerndevsociety</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact-form-container">
        <h3 className="Contact-form-title">
          &gt; or write to us here directly!
        </h3>
        <div className="Contact-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}
            onInvalid={(e) => {
              e.preventDefault();
              promptInvalid();
            }}
          >
            <div className="first-last-inputs">
              <div className="input-container firstName">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="input-container lastName">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="input-container">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </div>
            <div className="input-container">
              <textarea
                className="body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="What would you like to say?"
                required
              />
            </div>
            <button type="submit" className="send-button">
              <strong>Send</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
