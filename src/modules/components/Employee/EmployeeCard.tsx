
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Employee = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    department: string;
    salary: number;
    dateOfJoining: string;
};

type EmployeeCardProps = {
    employee: Employee;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
    return (
        <Link
            to={`/employees/${employee._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
        >

            <Card className="mb-3 shadow-sm">
                <Card.Body>
                    <Card.Title>
                        {employee.firstName} {employee.lastName}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {employee.position} - {employee.department}
                    </Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <strong>Email:</strong> {employee.email}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Salary:</strong> ${employee.salary.toLocaleString()}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>Date of Joining:</strong> {new Date(employee.dateOfJoining).toLocaleDateString()}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default EmployeeCard;

