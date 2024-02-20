import React from 'react'
import { Carousel } from 'react-bootstrap'
import ISO_9001 from "../assets/img/ISO_9001.png";
import ISO_27001 from "../assets/img/ISO_27001.png";
import Nasscom from "../assets/img/nasscom.jpg";

export const Certifications = () => {
  return (
    <section className='align-items-center text-center pb-10 contact'>
        <h1 style={{color:'white'}}>Certifications and Memberships</h1>
        <div className='d-flex flex-row'>
            <div style={{width: '30%'}}>
                <img src={ISO_27001} style={{width:'35%'}} alt="Icon" />
            </div>
            <div className='mt-3' style={{width: '30%'}}>
                <img src={Nasscom} style={{width:'45%'}} alt="Icon" />
            </div>
            <div style={{width: '30%'}}>
                <img src={ISO_9001} style={{width:'35%'}} alt="Icon" />
            </div>
        </div>
    </section>
  )
}
