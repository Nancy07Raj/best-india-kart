"use client";
import { Header, Footer, Menu, KartCard } from "@/app/component";
import "@/public/styles/category.scss";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Collapse, Slider, Input, Breadcrumb } from "antd";
import { FastenersCard, RivetCard } from "@/public/static/lib";
import Link from "next/link";

export default function CategoryName() {
  const text = [
    {
      id: 1,
      name: "Open GRIP Rivetnut",
      path: "/home/rivet/opengriprivetnut",
    },
    {
      id: 2,
      name: "Closed GRIP Rivetnut",
      path: "/home/rivet/opengriprivetnut",
    },
    {
      id: 3,
      name: "Splined",
      path: "/home/rivet/opengriprivetnut",
    },
  ];

  return (
    <>
      <Header />
      <Menu isOpen={false} />
      <Row className="category-page py-4">
        <Col lg={3} className="d-flex collapse-col flex-column">
          <h5>Rivet Nuts</h5>
          <Collapse
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "Rivet Nuts",
                children: text.map((c) => (
                  <Link className="d-flex px-2" href={c?.path} key={c.id}>
                    <Image src="/images/icons/mask.png" alt="mask" />{" "}
                    <p className="ms-2">{c.name}</p>
                  </Link>
                )),
              },
            ]}
            expandIconPosition="end"
          />
          <Collapse
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "Average Rating",
                children: text.map((c) => (
                  <div className="d-flex px-2" key={c.id}>
                    {Array(5).fill(
                      <Image src="/images/icons/star.png" alt="star" />
                    )}
                    <p className="ms-2">(6)</p>
                  </div>
                )),
                showArrow: false,
              },
            ]}
          />
          <Collapse
            defaultActiveKey={["1"]}
            items={[
              {
                key: "1",
                label: "Rivet Nuts",
                children: (
                  <div className="d-flex flex-column px-2">
                    <Slider range defaultValue={[1, 100]} min={1} />
                    <Button className="rounded-0 w-50 b-0 mb-2" type="button">
                      Filter
                    </Button>
                    <p>Price - Rs.1000 - Rs.2000</p>
                  </div>
                ),
                showArrow: false,
              },
            ]}
            expandIconPosition="end"
          />
        </Col>
        <Col lg={9} className="d-flex category-card flex-column">
          <div className="path d-flex justify-content-end">
            <Breadcrumb
              items={[
                {
                  title: <Link href="/">Home</Link>,
                },
                {
                  title: "Rivet",
                },
              ]}
            />
          </div>
          <div className="d-flex show-icon-search py-2 ">
            <div className="d-flex">
              <Image
                src="/images/icons/card-icon.png"
                alt="card"
                className="mx-2"
              />
              <Image
                src="/images/icons/list-icon.png"
                alt="list"
                className="mx-2"
              />
              <p className="m-0 mx-2">showing all 3 results</p>
            </div>
            <div className="search d-flex">
              <Input placeholder="Search" bordered={false} />
              <Button type="button">
                <Image src="/images/icons/search.png" alt="search" />
              </Button>
            </div>
          </div>
          <KartCard data={RivetCard} viewBtn={false} />
        </Col>
      </Row>
      <KartCard
        heading="Related Product"
        subHeading={false}
        data={FastenersCard}
        slider={true}
        viewBtn={false}
      />
      <Footer />
    </>
  );
}
