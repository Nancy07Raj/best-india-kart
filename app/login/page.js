"use client";
import { Input } from "antd";
import { Row, Col, Image } from "react-bootstrap";

export default function Login() {
  return (
    <div className="login-container d-flex justify-content-center align-items-center m-5">
      <Row className="login-content justify-content-md-center w-75">
        <Col lg={5} md={5} className="login-left">
          {/* <Image src="/images/banner/login-banner.png" alt="banner" /> */}
          <div className="logo-div">
            {/* <Image src="/images/login-logo.png" alt="logo" /> */}
          </div>
        </Col>
        <Col
          lg={7}
          md={7}
          className="login-right d-flex flex-column justify-content-md-center p-5 "
        >
          <div className="d-flex login">
            <Image src="/images/icons/back-btn.png" alt="back" />
            <p>Login</p>
          </div>
          <div className="d-flex login-input my-5">
            {/* <Image
              src="/images/icons/login-border.png"
              alt="email"
              className="login-border"
            /> */}
            <Image src="/images/icons/input-email.png" alt="email" />
            <Input placeholder="Input Your User ID or Email" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
