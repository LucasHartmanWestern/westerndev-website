
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';

function Contact() {
  return (
    <div >
        &lt;Contact&gt;
        <div className="Contact-List">
        Have Any Questions or Comments? Reach out to us through:
          <ul>
            <li>Linkedin: Western Developer's Society <FaLinkedin /> </li>
            <li>Instagram: @westerndevsociety <FaInstagram /> </li>
            <li>Facebook: @westerndevsociety <FaFacebookSquare /> </li>
            <li>Email: asdfghjk@placeholder.com <FaEnvelope/> </li>
          </ul>
        </div>
        &lt;/Contact&gt;
    </div>
  );
}

export default Contact;
