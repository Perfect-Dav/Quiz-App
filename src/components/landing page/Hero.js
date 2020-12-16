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
                                    <div style={{marginBottom: '70px'}}>
                                        <Button component={RouterLink} to="/Demo" className={styles.heroBtn} variant="contained">
                                            See Demo
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
     );
}
 
export default Hero;