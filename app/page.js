"use client";

import { Container, Image, Button, Row, Col, Card } from "react-bootstrap";
import styles from "./page.module.css";
import Header from "./component/Header";
import "@/public/styles/header.scss";
import Menu from "./component/Menu";
import "@/public/styles/home.scss";
import { FastenersCard } from "@/public/static/lib";
import KartCard from "./component/KartCard";

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
      <div className="brochure">
        <div className="content d-flex flex-column">
          <h3>Requirements, Information or Something else?</h3>
          <p>We Please be so kind and send us your enquiry.</p>
        </div>
      </div>
    </>
  );
}
