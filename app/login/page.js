"use client";
import { useState } from "react";
import { Checkbox, Input } from "antd";
import Link from "next/link";
import { Row, Col, Image } from "react-bootstrap";
import { usePathname } from "next/navigation";
import OTPInput from "react-otp-input";

export default function Login() {
  const pathname = usePathname();
  const [otp, setOtp] = useState("");

  console.log(pathname);

  return (
    <div className="login-container d-flex justify-content-center align-items-center ">
      <Row className="login-content justify-content-md-center">
        <Col
          lg={4}
          md={4}
          className="login-left d-flex justify-content-center "
        >
          <div className="logo-div d-flex flex-column justify-content-md-center  align-items-center">
            <Image src="/images/login-logo.png" alt="logo" fluid />
            <p>India’s </p>
            <p>
              <span>FIRST FASTENERS </span>E-COMMERCE PLATFORM
            </p>
          </div>
        </Col>
        <Col
          lg={7}
          md={7}
          className="login-right d-flex flex-column justify-content-md-center p-5 "
        >
          {(pathname === "/register" || pathname === "/login") && (
            <>
              <div className="d-flex login">
                <Image src="/images/icons/back-btn.png" alt="back" />
                <p>
                  {pathname === "/register" ? "User Registration" : "Login"}
                </p>
              </div>
              <div className="d-flex login-input mt-5">
                <div className="icon-div">
                  <Image src="/images/icons/input-email.png" alt="email" />
                </div>
                <Input placeholder="Input Your User ID or Email" />
              </div>
              <div className="d-flex login-input mt-3">
                <div className="icon-div">
                  <Image
                    src="/images/icons/key.png"
                    alt="email"
                    className="p-3"
                  />
                </div>
                <Input.Password placeholder="Password" />
              </div>
              {pathname === "/register" && (
                <>
                  {" "}
                  <div className="d-flex login-input mt-3">
                    <div className="icon-div">
                      <Image
                        src="/images/icons/lock.png"
                        alt="email"
                        className="p-3"
                      />
                    </div>
                    <Input.Password placeholder="Confirm Password" />
                  </div>
                  <div className="login-btn d-flex justify-content-md-center mx-auto py-2 my-3 rounded-3 align-items-center mt-4">
                    <span className="ms-3">Get Otp</span>
                  </div>
                  <div className="register-link d-flex justify-content-md-center mx-auto">
                    <Link href="#">Already have an Account?</Link>
                  </div>
                </>
              )}

              {pathname === "/login" && (
                <>
                  <div className="remember d-flex justify-content-between mt-3">
                    <Checkbox>Remember me</Checkbox>
                    <Link href="#">Forgot Password ?</Link>
                  </div>

                  <div className="login-btn d-flex justify-content-md-center mx-auto py-2 my-3 rounded-3 align-items-center mt-4">
                    <Image src="/images/icons/login-icon.png" alt="login" />
                    <span className="ms-3">Login</span>
                  </div>
                  <div className="register-link d-flex justify-content-md-center mx-auto">
                    <Link href="https://www.bestindiakart.com/register">
                      Register a new membership
                    </Link>
                  </div>
                </>
              )}
            </>
          )}
          {pathname === "/verification" && (
            <>
              <div className="d-flex login">
                <Image
                  src="/images/icons/back-btn.png"
                  alt="back"
                  style={{ marginRight: "30%" }}
                />
                <p>OTP Verification</p>
              </div>
              <div className="enter-otp d-flex justify-content-center mt-4">
                <p>
                  Enter the OTP sent to ............<span>26</span>
                </p>
              </div>
              <div className="otp-input d-flex justify-content-center mt-4">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  inputType="tel"
                  // shouldAutoFocus="true"
                />
              </div>
              <div className="resend-otp d-flex justify-content-center mt-5">
                <p>
                  Didn’t receive the OTP?<Link href="#">Resend OTP</Link>
                </p>
              </div>
              <div className="login-btn d-flex justify-content-md-center mx-auto py-2 my-3 rounded-3 align-items-center mt-4">
                <Image src="/images/icons/login-icon.png" alt="login" />
                <span className="ms-3">Verify</span>
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
