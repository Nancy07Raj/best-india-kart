"use client";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { Input, Collapse } from "antd";

export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <Container>
          <Row className="py-2 align-items-center">
            <Col lg={4} md={4}>
              <h6>WELCOME TO OUT STORE...!</h6>
            </Col>
            <Col
              lg={8}
              md={8}
              className="justify-content-end align-items-center d-flex"
            >
              <div className="px-2  social-media ">
                <Image
                  src="/images/icons/facebook.png"
                  alt="headphone"
                  className="px-1"
                />
                <Image
                  src="/images/icons/youtube.png"
                  alt="headphone"
                  className="px-1"
                />
                <Image
                  src="/images/icons/instagram.png"
                  alt="headphone"
                  className="px-1"
                />
                <Image
                  src="/images/icons/linkedin.png"
                  alt="headphone"
                  className="px-1"
                />
                <Image
                  src="/images/icons/twitter.png"
                  alt="headphone"
                  className="px-1"
                />
              </div>
              <div className="best-india-outer d-flex align-items-center ">
                <div className="best-india d-flex flex-column align-items-center mx-4 px-2">
                  <h6>Best IndiaKart contact</h6>
                  <p>9.00 am to 5.30pm</p>
                  <p>Monday to Saturday</p>
                </div>
              </div>
              <div className="reg-btn d-flex align-items-center">
                <Button type="button" className="ms-4 px-5">
                  Register Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="menus-top py-1">
        <Container>
          <Row>
            <Col lg={2} md={2} sm={2}>
              <Image src="/images/best-india-logo.png" alt="logo" />
            </Col>
            <Col
              lg={10}
              md={10}
              sm={10}
              className="d-flex align-items-center justify-content-end"
            >
              <div className="call d-flex justify-content-center align-items-center px-2">
                <Image
                  src="/images/icons/headphones.png"
                  alt="headphones"
                  width={38}
                  height={38}
                />
                <div className="call-us d-flex flex-column mx-2">
                  <h6>Call Us Now</h6>
                  <p>+91 6383735782</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Image
                  src="/images/icons/email.png"
                  alt="email"
                  width={38}
                  height={38}
                />
                <div className="mail-us d-flex flex-column mx-2">
                  <h6>Mail Us</h6>
                  <p>info@bestindiakart.com</p>
                </div>
              </div>
              <div className="search d-flex">
                <Input
                  placeholder="Enter Product, Part Number (English Only)"
                  bordered={false}
                />
                <Button type="button">
                  <Image src="/images/icons/search.png" alt="search" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
