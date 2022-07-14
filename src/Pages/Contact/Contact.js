
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';
import Fade from 'react-reveal/Fade'

function Contact() {

  document.body.style = 'background: #B89EC5;';

  return (
    <div className="Contact-Container">
      <Fade>
      <div className="Contact-1">
        <div className="Contact-Title">
          Let's Chat!
        </div>

        <div className="Contact-Description">
            want to learn more?
            want us to build you 
            a beautiful website?
        </div>
      </div>  
      </Fade>

      <div className="Contact-2">
        <div className="Contact-Stater">   
        <div className="Contact-Email">   <FaEnvelope/> &gt;write us at asdfghjk@placeholder.com <br /></div>
        <div className="Contact-check"> &gt;check out our socials! </div>
        </div>
        
        <div className="Contact-Socials">
          <div className="Contact-linkedin">  <a href="https://www.linkedin.com/company/western-dev-society/?originalSubdomain=ca" target="_blank"><FaLinkedin /></a> <br/> Western Developer's Society</div>
          <div className="Contact-insta">  <a href="https://www.instagram.com/westerndevsociety/" target="_blank"><FaInstagram /></a>  <br/> @westerndevsociety </div>
          <div className="Contact-facebook">  <a href="https://www.facebook.com/westerndevsociety/" target="_blank"><FaFacebookSquare /></a> <br/> @westerndevsociety </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
