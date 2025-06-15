import React, { useState } from "react";
import { Container, Col, Form, } from "react-bootstrap";
import styles from "./Form.module.css";
import { useRouter } from 'next/router';
import { sendMessage } from './../../api/message';

const ContactForm = () => {
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      const data = {};
      modalInputs.forEach(({ name }) => (data[name] = formData.get(name)));
      await sendMessage(data);
      router.push("https://apexdv.com/thank-you");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${styles.box}`}>
      <Container>
        <Form onSubmit={handleSubmit} id="contact-form">
          {modalInputs.map(
            ({ name, type, placeholder, required }) => (
              <Col
                key={name}
                lg={type ? 12 : 12}
                md={type ? 12 : 12}
                sm={12}
                className="form-group"
              >
                <div className={styles.formContainer}>
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
                          className={`form-control ${styles.input}`}
                        />
                      ) : (
                        <Form.Control
                          type={type}
                          name={name}
                          placeholder={placeholder}
                          required={required}
                          className={`form-control ${styles.input}`}
                        />
                      )}
                    </Form.Group>
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      className={`form-control ${styles.textarea}`}
                    ></textarea>
                  )}
                </div>
              </Col>
            )
          )}
          <Col lg={12} md={12} sm={12} className={styles.submitBtn}>
            {
              loading
                ? (<button disabled className={styles.button}>Submitting...!</button>)
                : (<button className={styles.button}>Send message</button>)
            }
          </Col>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
