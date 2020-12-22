import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import styles from "./Landing.module.css";
import "./Landing.module.css";

const useStyles = makeStyles((theme) => ({
    starterBtn: {
        textDecoration: 'none',
        '&hover': {
            textDecoration: 'none !important',
            easing: theme.transitions.easing.easeOut,
            background: 'red'
        }
    }
}));

const overviewImages = [
    {
        id: 1, 
        overviewImage: 'assets/overview_carousel/image1.jpg',
        alt: 'image 1'
    },

    {
        id: 2,
        overviewImage: 'assets/overview_carousel/image2.jpg',
        alt: 'image 2'
    },

    {
        id: 3,
        overviewImage: 'assets/overview_carousel/image3.jpg',
        alt: 'image 3'
    }
];

const Overview = () => {

    const classes = useStyles();

    return ( 
        <>
            <section style={{ background: '#F2F2F2', marginTop: '100px' }}>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className={styles.overviewDiv}>
                                <h5>Product Overview</h5>
                                <h4>Need a tour?</h4>
                            </div>
                            <div className={styles.product_overview}>
                                <div className={styles.product_overview_list}>
                                    <div className={styles.list_item}>
                                        <div className={styles.list_item_img}>
                                            <i style={{ paddingTop: '20px' }} className="fas fa-chalkboard-teacher"></i>
                                        </div>
                                        <div className={styles.list_item_desc}>
                                            <h3>Live Engagement</h3>
                                            <p>Presentations, quizzes, and polls</p>
                                        </div>
                                    </div>
                                    {/** First Product ends */} <br />
                                    <div className={styles.list_item}>
                                        <div className={styles.list_item_img}>
                                            <i style={{ paddingTop: '20px' }} className="fas fa-clock"></i>
                                        </div>
                                        <div className={styles.list_item_desc}>
                                            <h3>Assessment and eLearning</h3>
                                            <p>Asynchronous concept checks and study tools</p>
                                        </div>
                                    </div>
                                    {/** Second Product Ends */} <br />
                                    <div className={styles.list_item}>
                                        <div className={styles.list_item_img}>
                                            <i style={{ paddingTop: '20px' }} className="fas fa-chart-bar"></i>
                                        </div>
                                        <div className={styles.list_item_desc}>
                                            <h3>Insights and Reporting</h3>
                                            <p>Meaningful feedback for everyone</p>
                                        </div>
                                    </div>
                                </div>
                                {/** All products ends **/}
                                <div className={styles.product_overview_moreLink}>
                                    <Link 
                                        className={styles.product_overview_moreLink} 
                                        component={RouterLink} 
                                        to="/Demo"
                                    >
                                        See More <i className="fas fa-arrow-right"></i> 
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Container style={{ padding: '25px' }}>
                                <Carousel controls={false} pause="hover">
                                    {overviewImages.map((carousell) => (
                                        <Carousel.Item key={carousell.id}>
                                            <img 
                                                src={carousell.overviewImage}
                                                alt={carousell.alt}
                                                className= "d-block w-100"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>

        {/** Start Card Section */}
            <section style={{ marginTop: '111px', marginBottom: '111px' }}>
                <Container className={styles.start_container}>
                    <div>
                        <div>
                            <h3>Ready to get started?</h3>
                        </div>
                        <div>
                            <Link className={classes.starterBtn} component={RouterLink} to="/Login">
                                <Button className={styles.start_container_btn}>Start for free <i className="fas fa-arrow-right"></i> </Button>
                            </Link>

                            <p>No Credit Card Required</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Overview;