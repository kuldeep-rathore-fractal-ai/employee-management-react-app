import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4 p-md-5">
              <Card.Title className="fw-bold fs-3 mb-3 text-dark">
                About Employee Management System
              </Card.Title>
              <Card.Text className="text-muted mb-3">
                The <span className="fw-semibold">Employee Management System</span> is a
                modern React-based application designed to help organizations keep their
                employee records clean, organized, and always up to date.
              </Card.Text>
              <Card.Text className="text-muted mb-3">
                This capstone project demonstrates a complete{" "}
                <span className="fw-semibold">CRUD workflow</span> for managing employees:
              </Card.Text>

              <ListGroup className="mb-3">
                <ListGroup.Item>
                  <strong>Create</strong> – Add new employees with key details like
                  role, department, salary, and start date.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Read</strong> – Browse a responsive grid of employees and
                  drill into full profile details.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Update</strong> – Edit existing employee information as roles
                  and responsibilities evolve.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Delete</strong> – Safely remove employees that are no longer
                  part of the organization.
                </ListGroup.Item>
              </ListGroup>

              <Card.Text className="text-muted">
                The UI is built with <strong>React</strong> and{" "}
                <strong>React-Bootstrap</strong>, focusing on clean layout, clear
                typography, and mobile-friendly design—ideal for learning how to build
                real-world CRUD applications in React.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;