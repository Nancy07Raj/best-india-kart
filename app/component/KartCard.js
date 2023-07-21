import { Image, Button, Row, Col, Card } from "react-bootstrap";
import "@/public/styles/KartCard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image src="/images/icons/slider-right-arrow.png" alt="arrow" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Image src="/images/icons/slider-left-arrow.png" alt="arrow" />
    </div>
  );
}
export const settings2 = {
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  // autoplaySpeed:200,
  cssEase: "linear",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: false,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

export default function KartCard({
  heading,
  subHeading = true,
  slider = false,
  viewBtn = true,
  data,
}) {
  return (
    <div className="card-div py-5">
      {heading && (
        <div className="card-header">
          <Button type="button" className="py-3 px-4 btn-active">
            {heading}
          </Button>
          {subHeading && (
            <Button type="button" className="py-3 px-4">
              Deal of the Day
            </Button>
          )}
        </div>
      )}
      {!slider && (
        <Row className="py-5">
          {data?.map((f) => (
            <Col key={f?.id} lg={3} md={6} className="pb-4">
              <Card
                style={{ width: "16rem" }}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="card-img">
                  <Card.Img variant="center" src={f?.img} />
                </div>
                {f?.icons && (
                  <div className="card-icon d-flex flex-column">
                    <Image src="/images/icons/heart.png" alt="heart" />
                    <Image src="/images/icons/eye.png" alt="eye" />
                    <Image src="/images/icons/cart.png" alt="cart" />
                  </div>
                )}
                <Card.Body className="d-flex align-items-center justify-content-end flex-column">
                  <Card.Text>
                    {Array(f?.star).fill(
                      <Image src="/images/icons/star.png" alt="star" />
                    )}
                  </Card.Text>
                  <Card.Title>{f?.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {slider && (
        <Row className="p-5">
          <Slider {...settings2}>
            {data?.map((f) => (
              <Card
                style={{ width: "16rem" }}
                className="d-flex align-items-center justify-content-center"
                key={f?.id}
              >
                <div className="card-img">
                  <Card.Img variant="center" src={f?.img} />
                </div>
                {f?.icons && (
                  <div className="card-icon d-flex flex-column">
                    <Image src="/images/icons/heart.png" alt="heart" />
                    <Image src="/images/icons/eye.png" alt="eye" />
                    <Image src="/images/icons/cart.png" alt="cart" />
                  </div>
                )}
                <Card.Body className="d-flex align-items-center justify-content-end flex-column">
                  <Card.Text className="d-flex ">
                    {Array(f?.star).fill(
                      <Image src="/images/icons/star.png" alt="star" />
                    )}
                  </Card.Text>
                  <Card.Title>{f?.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        </Row>
      )}
      {viewBtn && (
        <div className="view-more-btn d-flex justify-content-center align-items-center">
          <Button type="button" className="px-4">
            View More Product
          </Button>
        </div>
      )}
    </div>
  );
}
