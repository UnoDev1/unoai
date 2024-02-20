import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import ISO_9001 from "../assets/img/ISO_9001.png";
import ISO_27001 from "../assets/img/ISO-27001-Certification.png";
import Nasscom from "../assets/img/nasscom.jpg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <div className="text-center">
            <h1 className="mb-3" style={{color:'white'}}>Certifications and Memberships</h1>
            <div className='d-flex flex-row mt-5'>
                <div style={{width: '30%'}}>
                    <a href="https://drive.google.com/file/d/1-dNxFQg8iJS6wmQMsrj8hUz1iyolGE55/view?usp=sharing" target="_blank"><img src={ISO_27001} style={{width:'35%'}} alt="Icon" /></a>
                </div>
                <div className='mt-3' style={{width: '30%'}}>
                    <a href="#" target="_blank"><img src={Nasscom} style={{width:'45%'}} alt="Icon" /></a>
                </div>
                <div style={{width: '30%'}}>
                    <a href="https://drive.google.com/file/d/1-Q29JoZeuhz5UInAE3hKuy67eDzpO6M9/view?usp=sharing" target="_blank"><img src={ISO_9001} style={{width:'35%'}} alt="Icon" /></a>
                </div>
            </div>
          </div>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024 Uno.AI Solutions LLC. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
