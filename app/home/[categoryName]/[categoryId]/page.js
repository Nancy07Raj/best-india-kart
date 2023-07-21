"use client";

import { Header, Footer, Menu, KartCard } from "@/app/component";
import "@/public/styles/category.scss";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Collapse, Slider, Input, Breadcrumb } from "antd";
import { FastenersCard, RivetCard } from "@/public/static/lib";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function CategoryName() {
  const text = [
    {
      id: 1,
      name: "Open GRIP Rivetnut",
    },
    {
      id: 2,
      name: "Closed GRIP Rivetnut",
    },
    {
      id: 3,
      name: "Splined",
    },
  ];

  return (
    <>
      <Header />
      <Menu isOpen={false} />
      <Row className="category-page py-4">
        <Col lg={6} className="d-flex collapse-col flex-column">
          <h5>Open GRIP Rivetnut</h5>
          <div className="carousel-div ">
            <Carousel
              showArrows={true}
              showThumbs={true}
              showIndicators={false}
            >
              <div>
                <Image src="/images/tools/img1.png" alt="image" />
              </div>
              <div>
                <Image src="/images/tools/img1.png" alt="image" />
              </div>
              <div>
                <Image src="/images/tools/img1.png" alt="image" />
              </div>
              <div>
                <Image src="/images/tools/img1.png" alt="image" />
              </div>
            </Carousel>
          </div>
        </Col>
        <Col lg={6} className="d-flex category-card flex-column">
          <div className="path d-flex justify-content-end">
            <Breadcrumb
              items={[
                {
                  title: <Link href="/">Home</Link>,
                },
                {
                  title: (
                    <Link href="/home/rivet" style={{ color: "black" }}>
                      Rivet
                    </Link>
                  ),
                },
                {
                  title: "Open GRIP Rivetnut",
                },
              ]}
            />
          </div>
          <div className="description py-3">
            <h5>Open GRIP Rivetnut</h5>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip commodo consequat.
            </p>
            <p className="price my-2">Rs. 2000 /-</p>
          </div>
        </Col>
      </Row>

      <Footer />
    </>
  );
}
