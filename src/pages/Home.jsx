import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/hero-img01.jpg"
import heroImg2 from "../assets/hero-img02.jpg"
// import heroVideo from "../assets/hero-video.mp4"
import dubaiImg from "../assets/dubai.jpg"
import wordlImg from "../assets/world.png"
import Subtitle from '../shared/Subtitle';



const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className='hero_content'>
                <div className='hero_subtitle d-flex align-items-center'>
                  <Subtitle subtitle={"Know Before You Go"}/>
                  <img src={wordlImg} alt="" />
                </div>
                <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi reiciendis asperiores est blanditiis! Iure cupiditate rerum ducimus eaque odit reprehenderit sunt possimus eius, error quo nisi velit nam dicta sit.</p>
              </div>
            </Col>
            <Col lg="2">
              <div className='hero_img-box'>
              <img src={heroImg} alt=""/>
              </div>
            </Col>
            
            <Col lg="2">
              <div className='hero_img-box mt-4'>
              <img src={dubaiImg} alt=""/>
              </div>
            </Col>
            
            <Col lg="2">
            <div className='hero_img-box mt-5'>
              <img src={heroImg2} alt=""/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='services_subtitle'>what we serve</h5>
              <h2 className='services_title'>we offer our best services</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home