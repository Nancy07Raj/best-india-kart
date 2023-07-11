import { Image, Button, Row, Col, Card } from "react-bootstrap";
export default function KartCard({ heading, data }) {
  return (
    <div className="card-div py-5">
      <div className="card-header">
        <Button type="button" className="py-3 px-4 btn-active">
          {heading}
        </Button>
        <Button type="button" className="py-3 px-4">
          Deal of the Day
        </Button>
      </div>
      <Row className="py-5">
        {data?.map((f) => (
          <Col key={f?.id} lg={3} md={6} className="pb-4">
            <Card
              style={{ width: "18rem" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Card.Img variant="top" src={f?.img} />
              <Card.Body className="d-flex align-items-center flex-column">
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
      <div className="view-more-btn d-flex justify-content-center align-items-center">
        <Button type="button" className="px-4">
          View More Product
        </Button>
      </div>
    </div>
  );
}
