import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

import Typography from '@material-ui/core/Typography';

import styles from "./Landing.module.css";

const cardInfo = [

    {   id: '1',
        CardNum: "1", 
        cardLabel: "Add quiz and poll questions.", 
        cardimage: "assets/getting_started/card1.png" 
    },

    {   id: '2',
        CardNum: "2", 
        cardLabel: "Participants engage from any device.", 
        cardimage: "assets/getting_started/card2.png" 
    },

    {   id: '3',
        CardNum: "3", 
        cardLabel: "Get instant feedback.", 
        cardimage: "assets/getting_started/card3.png" 
    }
  
];

const GetStarted = () => {
    return ( 
        <>
          <section className={styles.cardSection}>
            <Container>
              <div>
                <Typography className={styles.cardHead} variant="h3">Getting started is free and easy</Typography> <br />
              </div>
              {/** Card Section **/}
                <Row>
                    {cardInfo.map((card) => (
                        <Col key={card.id} lg={4} md={4} sm={6} xs={12}>
                            <Card className={styles.card}>
                                <Card.Subtitle className={styles.cardNum}>{card.CardNum}</Card.Subtitle>
                                <Card.Title>
                                    <Typography className={styles.cardLabel} variant="h5">{card.cardLabel}</Typography>
                                </Card.Title>
                                <Card.Img variant="bottom" src={card.cardimage} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
          </section>
        </>
     );
}
 
export default GetStarted;