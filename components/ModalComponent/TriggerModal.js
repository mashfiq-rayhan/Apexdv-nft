import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Col, Form, Modal, Row } from "react-bootstrap";
import { sendMessage } from '../../api/message';
import styles from './ModalComponent.module.css';

function TriggerModal() {
    const modalInputs = [
        {
            name: "name",
            type: "text",
            placeholder: "Your Name",
            required: true,
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email Address",
            required: true,
        },
        {
            name: "phone_number",
            type: "number",
            placeholder: "Phone Number",
            required: true,
        },
        {
            name: "message",
            placeholder: "Your Project Description",
            required: true,
        },
    ];

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const data = {};
            modalInputs.forEach(({ name }) => (data[name] = formData.get(name)));
            console.log(data);
            await sendMessage(data);
            router.push("https://apexdv.com/thank-you");
        } catch (error) {
            console.log(error);
        }
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(() => {
            handleShow();
        }, 20000);
    }, []);
    return (
        <div>
            <div className="quote-btn-div">
                <button variant="primary" className='d-none' onClick={handleShow}>
                    {''}
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body closeButton className={styles.modalMain}>
                    <Row>
                        <Col md={5} lg={5} className={styles.modalImage}>
                            <h4>
                                Get Outstanding  <span>Business  Outcomes</span> With Future Ready Solutions
                            </h4>
                        </Col>
                        <Col md={7} lg={7} className={styles.modalFrom}>
                            <div>
                                <div className={styles.modalClouse}>
                                    <button onClick={handleClose}><i class="fa-solid fa-xmark"></i></button>
                                </div>
                                <h3>Get In Touch</h3>
                                <h4> Get Free Consultation From Top Industry Experts</h4>
                                <Form onSubmit={handleSubmit} id="contact-form">
                                    <Row className="clearfix">
                                        {modalInputs.map(
                                            ({ name, type, placeholder, required }) => (
                                                <Col
                                                    key={name}
                                                    lg={type ? 12 : 12}
                                                    md={type ? 12 : 12}
                                                    sm={12}
                                                    className="form-group"
                                                >
                                                    <div className={styles.fromInput}>
                                                        {type ? (
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="exampleForm.ControlInput1"
                                                            >
                                                                {name === "phone_number" ? (
                                                                    <Form.Control
                                                                        type={type}
                                                                        min={1000000000}
                                                                        name={name}
                                                                        placeholder={placeholder}
                                                                        required={required}
                                                                        onInput={(e) => {
                                                                            e.target.setCustomValidity("");
                                                                        }}
                                                                        onInvalid={(e) =>
                                                                            e.target.setCustomValidity(
                                                                                "Phone number at least 10 digits"
                                                                            )
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <Form.Control
                                                                        type={type}
                                                                        name={name}
                                                                        placeholder={placeholder}
                                                                        required={required}
                                                                    />
                                                                )}
                                                            </Form.Group>
                                                        ) : (
                                                            <textarea
                                                                name={name}
                                                                placeholder={placeholder}
                                                                required={required}
                                                            ></textarea>
                                                        )}
                                                    </div>
                                                </Col>
                                            )
                                        )}
                                        <Col lg={12} md={12} sm={12} className={styles.modalButton}>
                                            <button>Send message</button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TriggerModal