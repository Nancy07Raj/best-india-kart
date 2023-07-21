"use client";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Input } from "antd";
import "@/public/styles/footer.scss";
import Link from "next/link";

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
      <Row className="middle justify-content-center align-items-center py-5">
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
      <Row className="bottom justify-content-around align-items-start py-5">
        <Col lg={2} className="logo-img">
          <Image src="/images/login-logo.png" alt="logo" />
        </Col>
        <Col lg={2} className="d-flex flex-column">
          <h5>Customer Service</h5>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Register</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">How to use</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Catalog Request</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Inquiry</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Sitemap</Link>
          </div>
        </Col>
        <Col lg={3} className="d-flex flex-column">
          <h5>My Account</h5>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Request a Quote</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">My Quote / Order History</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Cart</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">My Page</Link>
          </div>
        </Col>
        <Col lg={3} className="d-flex flex-column">
          <h5>About Best Indiakart</h5>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">About Us</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Shipping Policy</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Refunds & Cancellations</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Terms & Conditions</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Blogs</Link>
          </div>
          <div className="d-flex">
            <Image className="me-2" src="/images/icons/mask.png" alt="mask" />{" "}
            <Link href="#">Contact Us</Link>
          </div>
        </Col>
        <Row className="bottom-end py-3">
          <Col lg={{ span: 3, offset: 8 }}>
            <p className="m-0">We Accept the Major Cards</p>
            <div className="member-card d-flex">
              <Image src="/images/icons/visa.png" alt="visa" />
              <Image src="/images/icons/master-card.png" alt="visa" />
              <Image src="/images/icons/american-express.png" alt="visa" />
            </div>
          </Col>
        </Row>
      </Row>
      <div className="copy-right d-flex justify-content-center align-items-center py-2">
        <p className="m-0">
          © 2023 .All Right Reserved. Design and Developed by{" "}
          <Link href="https://www.webdads2u.com/">WEBDADS2U PVT LTD</Link>
        </p>
      </div>
    </div>
  );
}
