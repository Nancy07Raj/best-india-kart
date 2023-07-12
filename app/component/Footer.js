"use client";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Input } from "antd";
import "@/public/styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <Row className="top justify-content-center align-items-center py-4">
        <Col lg={7} md={7} className="d-flex align-items-center">
          <div className="image-container d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column">
              <div className="image1 d-flex justify-content-end mt-4 pt-3">
                <Image src="/images/icons/line-1.png" alt="line" />
              </div>
              <div className="image2 d-flex justify-content-start px-3 mt-2">
                <Image src="/images/icons/line-1.png" alt="line" />
              </div>
              <div className="image3 d-flex justify-content-end">
                <Image src="/images/icons/line-1.png" alt="line" />
              </div>
            </div>
            <Image src="/images/icons/stay-email.png" alt="email" />
          </div>
          <div className="stay-connected">
            <h3>Keep up to date - Get e-mail updates</h3>
            <p>stay connected with our latest company news.</p>
          </div>
        </Col>
        <Col lg={5} md={5}>
          <div className="form d-flex">
            <Input placeholder="your Email address" bordered={false} />
            <Button type="button" className="py-3">
              Sign me up !
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="bottom justify-content-center align-items-center py-5">
        <Col
          lg={4}
          md={4}
          className="address d-flex flex-column align-items-center"
        >
          <Image src="/images/icons/location.png" alt="loaction" />
          <h3>Our Address</h3>
          <p>No 1A, Jeevarathinam street,</p>
          <p>KSR Nagar, Ambattur - 600053</p>
        </Col>
        <Col
          lg={4}
          md={4}
          className="address d-flex flex-column align-items-center"
        >
          <Image src="/images/icons/location-email.png" alt="loaction" />
          <h3>Drop us a line</h3>
          <p>sales@bestindiakart.com</p>
          <p>info@bestindiakart.com</p>
          <p>customersupport@bestindiakart.com</p>
        </Col>
        <Col
          lg={4}
          md={4}
          className="address d-flex flex-column align-items-center"
        >
          <Image src="/images/icons/headphone-footer.png" alt="loaction" />
          <h3>Support</h3>
          <p>+91 6383735782</p>
        </Col>
      </Row>
    </div>
  );
}
