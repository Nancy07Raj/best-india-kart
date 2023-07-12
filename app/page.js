"use client";

import { Container, Image, Button, Row, Col, Card } from "react-bootstrap";
import styles from "./page.module.css";
import Header from "./component/Header";
import "@/public/styles/header.scss";
import Menu from "./component/Menu";
import "@/public/styles/home.scss";
import { FastenersCard, ToolCard } from "@/public/static/lib";
import KartCard from "./component/KartCard";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Container>
        <div className="d-flex justify-content-end">
          <Image src="/images/banner/banner-1-1.jpg" alt="banner" />
        </div>
        <KartCard heading="Fasteners" data={FastenersCard} />
      </Container>
      <Row className="brochure align-items-center">
        <Col lg={8} className="content d-flex flex-column">
          <h3>Requirements, Information or Something else?</h3>
          <p>We Please be so kind and send us your enquiry.</p>
        </Col>
        <Col
          lg={4}
          className="brochure-btn-col d-flex align-item-center justify-content-center"
        >
          <div className="brochure-btn d-flex align-items-center p-2">
            <Button type="button">Download Brochure</Button>
            <Image src="/images/icons/arrow.png" alt="arrow" />
          </div>
        </Col>
      </Row>
      <Container>
        <KartCard heading="Tools" data={ToolCard} />
      </Container>
      <Footer />
    </>
  );
}
