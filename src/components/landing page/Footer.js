import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./Landing.module.css";

const footerlink2 = [
    { labels: "The Quiz Blog", href: "#!" },
    { labels: "Teacher Resources", href: "#!" },
    { labels: "Help Center", href: "#!" },
    { labels: "Quiz for Work", href: "#!" }
];

const footerlink3 = [
    { labels: "Terms of Service", href: "#!" },
    { labels: "Privacy Policy", href: "#!" },
    { labels: "Careers", href: "#!" },
    { labels: "About Us", href: "#!" }
];

const Footer = () => {
    return ( 
        <>
            <footer className={styles.footer}>
                <Container>
                    <Row>
                        <Col style={{ textAlign: 'left' }} lg={3} md={3} sm={6} xs={12}>
                            <div className={styles.copyright}>
                                <h5>© 2020 Quiz Inc.</h5>
                                <div className={styles.socialLinks}>
                                    <span>Follow us</span>
                                    <a href="#!" target="_BLANK"><i class="fab fa-twitter"></i></a>
                                    <a href="#!" target="_BLANK"><i class="fab fa-facebook"></i></a>
                                    <a href="#!" target="_BLANK"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </Col>
                        <Col className={styles.footer_col} style={{ textAlign: 'left' }} lg={3} md={3} sm={6} xs={12}>
                            <div className={styles.footerLink2}>
                                    <ul>
                                        {footerlink2.map((link2) => (
                                        <li key={link2.labels}><a href={link2.href}>{link2.labels}</a></li>
                                        ))}
                                    </ul>
                            </div>
                        </Col>
                        <Col className={styles.footer_col} style={{ textAlign: 'left' }} lg={3} md={3} sm={6} xs={12}>
                            <div className={styles.footerLink2}>
                                    <ul>
                                        {footerlink3.map((link3) => (
                                        <li key={link3.labels}><a href={link3.href}>{link3.labels}</a></li>
                                        ))}
                                    </ul>
                            </div>
                        </Col>
                        <Col className={styles.footer_col} style={{ textAlign: 'left' }} lg={3} md={3} sm={6} xs={12}>
                            <div>
                               <h3>Download our apps</h3>
                               <br />
                               <h4 style={{ color: 'rgba(255,255,255,0.5)' }}>COMING SOON !!</h4>             
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
     );
}
 
export default Footer;