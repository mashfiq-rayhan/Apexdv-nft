import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactDetails from "./ContactDetails";
import styles from "./ContactUs.module.css";
import ContactForm from "./Form";

export default function ContactUs() {
  return (
    <Container>
      <Row>
        <div className={styles.contact_header}>
          <p>Start A Conversation By Filling Out</p>
          <p>The Form</p>
        </div>
      </Row>
      <Row styles={styles.contact_row}>
        <Col md={6} sm={12} xs={12}>
          <Row>
            <ContactDetails />
          </Row>
          <div className={styles.details_image}>
            <Image
              src="/images/clients.png"
              alt="Picture of the client"
              width={555}
              height={105}
            />
          </div>
        </Col>
        <Col md={6} sm={12} xs={12}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
