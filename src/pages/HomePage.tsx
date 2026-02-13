import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={10} lg={8} xl={6}>
          <section className="text-center p-4 p-md-5 rounded-4 shadow-sm bg-white">
            <h1 className="display-5 mb-3 fw-bold">
              Welcome to Employee Management
            </h1>
            <p className="lead text-muted mb-3">
              A modern, responsive solution to manage your employee data with ease and
              efficiency.
            </p>
            <p className="text-secondary mb-4">
              Quickly create, view, update, and delete employee records from a single,
              intuitive dashboard. Get started by browsing the employee list.
            </p>
            <div>
              <Button
                as={NavLink as any}
                to="/employees"
                variant="primary"
                size="sm"
                className="px-3"
              >
                Browse Employees
              </Button>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
