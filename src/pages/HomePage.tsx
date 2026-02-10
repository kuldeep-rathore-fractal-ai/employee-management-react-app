import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Home = () => {

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
            <Col xs={12} md={8} lg={12}>
                <section className="text-center p-4  shadow-sm bg-light">
                <h1 className="display-4 mb-4 fw-bolder">Welcome to Employee Management</h1>
                <p className="lead text-secondary">
                    A modern solution to manage your employee data with ease and efficiency.
                </p>
                <p>
                    Perform CRUD operations to manage employee data efficiently.<br />
                    Use the button below to browse the employee list.
                </p>
                <div>
                    <NavLink to="/employees" className="btn btn-primary">Browse Employees</NavLink>
                </div>
                </section>
            </Col>
            </Row>
        </Container>
    );
};

export default Home;
