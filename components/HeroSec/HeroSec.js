import React, { useState } from "react";
import { Container, Col, Form } from "react-bootstrap";
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from "./HeroSec.module.css";
import Button from 'react-bootstrap/Button';
import apexdv from '../../public/images/apexdv logo.png';
import { sendMessage } from './../../api/message';

const HeroSec = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = { fullname, email, phoneNumber, desc };
            await sendMessage(data);
            router.push("https://apexdv.com/thank-you");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.Banner}>
            <Container>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.ApexDV}>
                            <Image src={apexdv} alt="ApexDV" />
                        </div>
                        <p className={styles.Leading}>Leading provider of</p>
                        <h1 className={styles.NFT}>NFT Marketplace</h1>
                        <h1 className={styles.Service}>Development</h1>
                        <p className={styles.Desc}>
                            Let us help you create an NFT Marketplace using revolutionary blockchain technology and the latest frameworks.
                        </p>
                        <div className={`row ${styles.Logo}`}>
                            <Image src="/images/HeroSec/appsters.webp" alt="Appsters" width={151} height={75} />
                            <Image src="/images/HeroSec/inc500.webp" alt="INC500" width={151} height={70} />
                            <Image src="/images/HeroSec/bma.webp" alt="BMA" width={191} height={50} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Form onSubmit={handleSubmit} className={styles.Form}>
                            <h2 className={styles.Consult}>Get a Free Consultation Today</h2>
                            <p className={styles.Details}>Leave Your Details Below</p>
                            <Form.Group>
                                <Form.Control
                                    className={styles.Input1}
                                    placeholder="Full Name"
                                    type="text"
                                    value={fullname}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                                <Form.Control
                                    className={styles.Input1}
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Form.Control
                                    className={styles.Input1}
                                    placeholder="Mobile number with country code"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                                <Form.Control
                                    className={styles.Input2}
                                    as="textarea"
                                    placeholder="Your project description"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button className={styles.Submit} type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSec;
