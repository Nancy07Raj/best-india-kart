"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import { Collapse } from "antd";
import "@/public/styles/menu.scss";

const text = [
  {
    id: 1,
    name: "Rivet",
    path: "/home/rivet",
  },
  {
    id: 2,
    name: "Rivet Nuts",
    path: "/home/rivet",
  },
  {
    id: 3,
    name: "Cage Nuts",
    path: "/home/rivet",
  },
  {
    id: 4,
    name: "RivThreaded Fastenerset",
    path: "/home/rivet",
  },
  {
    id: 5,
    name: "Self Piercing Rivet",
    path: "/home/rivet",
  },
  {
    id: 6,
    name: "Weld Stud",
    path: "/home/rivet",
  },
  {
    id: 7,
    name: "Weld Nuts",
    path: "/home/rivet",
  },
  {
    id: 8,
    name: "Threaded Coils",
    path: "/home/rivet",
  },
  {
    id: 9,
    name: "Trilobular screw",
    path: "/home/rivet",
  },
  {
    id: 10,
    name: "Sealing Plug",
    path: "/home/rivet",
  },
  {
    id: 12,
    name: "Self  Clinging Stud",
    path: "/home/rivet",
  },
  {
    id: 13,
    name: "Self  Clinging Nut",
    path: "/home/rivet",
  },
];

const items = [
  {
    key: "1",
    label: "Fasteners",
    children: text.map((c) => (
      <Link className="d-flex" href={c?.path} key={c.id}>
        <Image src="/images/icons/mask.png" alt="mask" />{" "}
        <p className="ms-1">{c.name}</p>
      </Link>
    )),
  },
  {
    key: "2",
    label: "Tools",
    children: text.map((c) => <p key={c.id}>{c.name}</p>),
  },
];

export default function Menu({ isOpen }) {
  const [showMenu, setShowMenu] = useState(isOpen);
  const pathname = usePathname();
  return (
    <div className="menu-div">
      <Row className="menu d-flex mt-2 px-5 justify-content-between">
        <Col
          lg={3}
          md={3}
          className="menu-left d-flex justify-content-center"
        ></Col>
        <Col lg={6} md={6} className="menu-left d-flex justify-content-center">
          <Link
            href="/"
            className={`py-3 ${
              (pathname === "/" || pathname.includes("home")) && "active-path"
            }`}
          >
            Home
          </Link>
          <Link href="/about" className="py-3 border-right">
            About Us
          </Link>
          <Link href="/use" className="py-3 border-right">
            How to Use
          </Link>
          <Link href="/inquiry" className="py-3 border-right">
            Inquiry
          </Link>
          <Link href="/contact" className="py-3">
            Contact Us
          </Link>
        </Col>
        <Col lg={3} md={3} className="menu-right d-flex justify-content-end">
          <Link href="#" className="px-3 py-3">
            Log In
          </Link>
          <div className="fav-cart px-3 py-3">
            <Image src="/images/icons/heart.png" alt="heart" />
            <span>0</span>
          </div>
          <div className="fav-cart px-3 py-3">
            <Image src="/images/icons/cart.png" alt="cart" />
            <span>0</span>
          </div>
        </Col>
      </Row>

      <div className="category">
        <div className="category-title d-flex p-2 justify-content-between align-items-center">
          <p>Shop By Categories</p>
          <Button type="button" onClick={() => setShowMenu(!showMenu)}>
            <Image src="/images/icons/menu.png" alt="menu" />
          </Button>
        </div>
        <div
          className="menu-accordion p-2"
          style={{ display: showMenu ? "block" : "none" }}
        >
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            accordion
            expandIconPosition="end"
            ghost
          />
        </div>
      </div>
    </div>
  );
}
