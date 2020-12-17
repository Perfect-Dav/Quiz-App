import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HeroImg from "../assets/Hero_image.png";
import styles from './Landing.module.css';

const Hero = () => {
    return ( 
        <>
            <section className={styles.hero_container}>
                    <Container fluid>
                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className={styles.hero_div}>
                                    <img 
                                        src={HeroImg}
                                        alt="Hero"
                                        className={styles.hero_img}
                                    />
                                </div>
                            </Col>
                            {/** 1st Column ends here **/}
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <div className={styles.heroDetails}>
                                    <Typography className={styles.heroH1} variant="h3">
                                        Quiz now made easy to create and use!
                                    </Typography>
                                    <Typography style={{ fontSize: '1.3rem', marginBottom: '35px'}} component="p" variant="body1">
                                        Create your custom quiz, import quiz and use the quiz for interview exam/test.
                                    </Typography>
                                    <div style={{marginBottom: '112px'}}>
                                        <Button component={RouterLink} to="/Demo" className={styles.heroBtn} variant="contained">
                                            See Demo
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
            
                <svg className={styles.svgCard}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 320">
                        <path 
                            fill="#ffffff" 
                            fillOpacity="1" 
                            d="M0,192L80,170.7C160,149,320,107,480,80C640,53,800,43,960,64C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                        </path>
                </svg>
            
        </>
     );
}
 
export default Hero;