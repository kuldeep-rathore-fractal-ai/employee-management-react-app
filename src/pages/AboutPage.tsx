import { Container, Card } from "react-bootstrap";

const AboutPage = () => {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm bg-light">
                <Card.Body>
                    <Card.Title className="fw-bold">About Us</Card.Title>
                    <Card.Text>
                        Welcome to the <span className="fw-bold">Employee Management System</span>.
                        This application is designed to simplify and streamline employee
                        information handling within an organization.
                    </Card.Text>
                    <Card.Text>
                        The system provides full <span className="fw-bold">CRUD</span> functionality:
                    </Card.Text>
                    <ul>
                        <li><span className="fw-bold">Create</span> – Add new employee records easily.</li>
                        <li><span className="fw-bold">Read</span> – View detailed employee information.</li>
                        <li><span className="fw-bold">Update</span> – Edit and update employee details.</li>
                        <li><span className="fw-bold">Delete</span> – Remove employees when necessary.</li>
                    </ul>
                    <Card.Text>
                        Our goal is to provide a user-friendly interface that ensures efficient
                        management of employee data, helping organizations maintain accurate
                        records and improve productivity.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AboutPage;