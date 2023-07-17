import React, { useCallback, useState } from "react"
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./Contact.css"
import axios from "axios"

const RECIEVER_EMAIL = "lblommes@uwo.ca"

function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  // const [invalid, setInvalid] = useState(false)

  const sendEmail = useCallback(() => {
    console.log(firstName, lastName, email, subject, body)
  }, [body, email, firstName, lastName, subject])

  const resetFields = useCallback(() => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setSubject("")
    setBody("")
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    sendEmail()
    axios.defaults.headers.post["Content-Type"] = "application/json"
    axios
      .post(`https://formsubmit.co/ajax/${RECIEVER_EMAIL}`, {
        name: firstName + " " + lastName,
        email: email,
        subject: subject,
        message: body,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    resetFields()
  }

  return (
      <div className="Contact-form-container">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="first-last-inputs">
              <div className="input-container firstName">
                <input
                  type="text"
                  name="name"
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
                name="email"
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
            <div className="input-container">
              <button type="submit" className="send-button">
                <strong>Send</strong>
              </button>
            </div>
          </form>
      </div>
  )
}
export default Contact
