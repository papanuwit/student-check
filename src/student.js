import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Container, Card, Modal } from 'react-bootstrap';
import axios from "axios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
const Students = () => {
    const [show, setShow] = useState(false);


    const [name, setName] = useState("")
    const [nameUpdate, setnameUpdate] = useState("")
    const [studenId, setStudenId] = useState("")
    const [studenIdUpdate, setIdUpdate] = useState("")

    const [level, setLevel] = useState("")
    const [data, setData] = useState([])
    const getStudents = async () => {

        await axios.get("http://localhost:4000/getStudent")
            .then(res => {
                setData(res.data)
            })
    }


    const handleShow = (data) => {
        setShow(true)
        setnameUpdate(data.name)
        setIdUpdate(data.studentId)
        setLevel(data.level)
    };
    const cancel = () => {
        setName("")
        setStudenId("")
        setLevel("")
    };

    const addStudent = async () => {

        const body = { studentId: studenId, name: name, level: level }
        await axios.post("http://localhost:4000/student", body)
            .then(res => {
                if (res.status === 200) {

                    alert("add student success");

                }
            })

        await getStudents()
    }

    const handleClose = () => {

        setShow(false);
    }
    const updateStudent = async () => {

        const body = { name: nameUpdate }
        await axios.put(`http://localhost:4000/student/${studenIdUpdate}`, body)
            .then(res => {
                if (res.status === 200) {

                    alert("update student success");

                }
            })

        await getStudents()
        handleClose()
    }




    const deleteStudent = async (id) => {

        await axios.delete(`http://localhost:4000/student/${id}`)
            .then(res => {
                if (res.status === 200) {
                    alert("delete student success");
                }
            })

        await getStudents()
    }
    useEffect(() => {
        getStudents()
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card style={{ marginTop: '30px' }}>

                            <Card.Title className="mt-4">แสดงข้อมูลนักศึกษา</Card.Title>
                            <Form>
                                <Container>


                                    <Row>
                                        <Col sm={3}   >
                                            <Form.Group>
                                                <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                                <Form.Control
                                                    placeholder="ชื่อ-นามสกุล"
                                                    type="text"
                                                    onChange={(e) => { setName(e.target.value) }}
                                                    value={name} />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={3}   >
                                            <Form.Group>
                                                <Form.Label>รหัสนักศึกษา {studenId}
                                                </Form.Label>
                                                <Form.Control type="text"
                                                    onChange={(e) => { setStudenId(e.target.value) }}
                                                    value={studenId}
                                                    placeholder="6-xx"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={3}   >
                                            <Form.Group>
                                                <Form.Label>ชั้นปี</Form.Label>
                                                <Form.Control type="number"
                                                    value={level}
                                                    onChange={(e) => { setLevel(e.target.value) }}
                                                    placeholder="ปี" />
                                            </Form.Group>
                                        </Col>
                                        <Col sm={3}>
                                            <Form.Group>


                                                <Button
                                                    style={{ marginTop: '30px' }}
                                                    variant="success"
                                                    onClick={() => addStudent()}
                                                >เพิ่มข้อมูล</Button>

                                            



                                            <Button
                                                style={{ marginTop: '30px' }}
                                                variant="danger"
                                                onClick={() => cancel()}
                                            >ยกเลิก</Button>

                                        </Form.Group>

                                    </Col>
                                </Row>
                            </Container>
                        </Form>

                        <Card.Body>
                            <ListGroup variant="flush">
                                {
                                    data?.map(item => {
                                        return (
                                            <>
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>ชื่อ : {item.name}</Col>
                                                        <Col> รหัส : {item.studentId}   <b> ปี - {item.level}</b> </Col>
                                                        <Col>
                                                            <ButtonGroup aria-label="Basic example">
                                                                <Button variant="warning" onClick={() => handleShow(item)}>แก้ไข</Button>
                                                                <Button variant="danger" onClick={() => deleteStudent(item.studentId)}>ลบ</Button>

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
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>แก้ไขข้อมูล</Modal.Title>
                </Modal.Header>
                <Modal.Body>  <Col sm={12}   >
                    <Form.Group>
                        <Form.Label>ชื่อ-นามสกุล</Form.Label>
                        <Form.Control
                            placeholder="ชื่อ-นามสกุล"
                            type="text"
                            onChange={(e) => { setnameUpdate(e.target.value) }}
                            value={nameUpdate} />
                    </Form.Group>
                </Col></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => updateStudent()}>
                        แก้ไข
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        ปืด
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
        </>
    )
}

export default Students;