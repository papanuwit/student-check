import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, Card } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const Register = async () => {
        await axios.post("http://localhost:4000/users/", { name: name, email: email, password: password })
            .then(res => {
                if (res.status === 200) {
                    navigate('/')
                }
            })

    }

    return (
        <>
            <Container>

                <Row className="mt-4">
                    <Col sm={4}></Col>
                    <Col sm={4} >
                        <Card style={{ marginTop: '60px' }}>
                            <Card.Body>
                                <Card.Title>Register</Card.Title>
                                <Form>
                                    <Row>
                                        <Col sm={12}
                                        >
                                            <Form.Group className="mb-2">
                                            <Row>
                                                    <Col sm={2}>
                                                        <Form.Label>email</Form.Label>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Control
                                                            placeholder="email"
                                                            type="text" value={email}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={2}>
                                                        <Form.Label>name</Form.Label>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Control
                                                            placeholder="name"
                                                            type="text" value={name}
                                                            onChange={(e) => setName(e.target.value)} />
                                                    </Col>
                                                </Row>
                                              



                                            </Form.Group>
                                            <Form.Group >
                                                <Row>

                                                    <Col sm={2}>
                                                        <Form.Label>password</Form.Label>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <Form.Control type="password"
                                                            placeholder="***"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)} />
                                                        <Button variant="primary w-100" className="mt-4"
                                                            onClick={() => Register()}>Register</Button>
                                                    </Col>
                                                </Row>


                                            </Form.Group>
                                        </Col>

                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </>
    )
}
export default Home;