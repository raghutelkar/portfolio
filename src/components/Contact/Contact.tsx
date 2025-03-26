import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:raghutelkarjobs@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:raghutelkarjobs@gmail.com">raghutelkarjobs@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919972591770"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919972591770">(+91) 9972591770</a>
        </div>  
      </div>
    </Container>
  )
}