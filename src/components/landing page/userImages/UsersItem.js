import React from 'react';

import Col from "react-bootstrap/Col";

import styles from "../Landing.module.css";

const UsersItem = ({ image, alt, classname }) => {
    return ( 
        <>
            <Col className={styles.imagesDiv} lg={3} md={3} sm={6} xs={12}>
                  <img 
                    src={image} 
                    alt={alt}
                    className={styles[classname]}
                  />
            </Col>
        </>
     ); 
}
 
export default UsersItem;