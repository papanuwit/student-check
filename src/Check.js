import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, Card } from 'react-bootstrap';
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
const Check = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([])
    const [dataCheck, setDataCheck] = useState([])
    const getStudents = async () => {

        await axios.get("http://localhost:4000/getStudent")
            .then(res => {
                setData(res.data)
            })
    }
    const getStudentsCheck = async () => {

        await axios.get("http://localhost:4000/")
            .then(res => {
                setDataCheck(res.data)
            })
    }


    const checkStudents = async (id, val) => {
        const body = { studentId: id, status: val }
        await axios.post("http://localhost:4000/", body)
            .then(res => {
                if (res.status === 200) {
                    alert("บันทึกเข้าชั้นเรียนสำเร็จ")
                }
            })
        await getStudentsCheck()
    }




    useEffect(() => {
        getStudents()
        getStudentsCheck()
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card style={{ marginTop: '30px' }}>

                            <Card.Title className="mt-4">บันทึกข้อมูลการเข้าเรียน ประจำรายวิชา Frontend Web Programming</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col sm={12}>
                                        <Button variant="primary" onClick={handleShow}> สรุปข้อมูลการเข้าเรียน </Button>
                                    </Col>
                                </Row>

                                <ListGroup variant="flush">
                                    {
                                        data?.map(item => {
                                            return (
                                                <>
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>ชื่อ : {item.name}</Col>
                                                            <Col> รหัส : {item.studentId}</Col>
                                                            <Col>
                                                                <p> จัดการสถานะ</p>

                                                                <ButtonGroup aria-label="Basic example">


                                                                    <Button variant="success" onClick={() => checkStudents(item.studentId, 'เข้าเรียน')}>เข้าเรียน</Button>
                                                                    <Button variant="warning" onClick={() => checkStudents(item.studentId, 'สาย')}>สาย</Button>
                                                                    <Button variant="danger" onClick={() => checkStudents(item.studentId, 'ขาด')} >ขาด</Button>
                                                                </ButtonGroup>

                                                            </Col>

                                                        </Row>

                                                    </ListGroup.Item>
                                                </>
                                            )
                                        })
                                    }
                                </ListGroup>

                            </Card.Body>

                        </Card>
                    </Col>

                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ข้อมูลการเข้าเรียน</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ListGroup variant="flush">
                            {
                                dataCheck?.map(item => {
                                    return (
                                        <>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col sm={12}> <b> ชื่อ : {item.name}</b></Col>
                                                    <Col> รหัส : {item.studentId}</Col>
                                                    <Col>
                                                        <b>   สถานะ : {item.status}</b>
                                                    </Col>

                                                </Row>

                                            </ListGroup.Item>
                                        </>
                                    )
                                })
                            }
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            ปิด
                        </Button>

                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default Check;