import React from 'react';

import UsersItems from "./UsersItem";
import users from "./user";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Typography from '@material-ui/core/Typography';

import styles from "../Landing.module.css";

const UsersList = () => {
    const UserImagesArray = Object.values(users);
    return ( 
        <>
            <Container>
                <div className={styles.userDiv}>
                    <Typography variant="h3">Don't take our word for it !</Typography> <br />
                    <Typography variant="h6" style={{ color: '#2a71c7' }}>
                        This platform is used by more than 20 million people per month in <br />
                        schools, homes, and offices around the world.
                    </Typography>
                </div>
            </Container>
            <Container>
                <Row>
                    {UserImagesArray.map((userImg) => (
                        <UsersItems key={userImg.id} {...userImg} />
                    ))}
                </Row>
            </Container>
        </>
     );
}
 
export default UsersList;