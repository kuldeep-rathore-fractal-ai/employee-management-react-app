import { Card, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }: any) => {
  return (
    <Link
      to={`/employees/${employee._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="mb-3 shadow-sm h-100">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0">
              {employee.firstName} {employee.lastName}
            </Card.Title>
            <Badge bg="secondary" pill >
              {employee.department}
            </Badge>
          </div>
          <Card.Subtitle
            className="mb-3 text-muted small text-truncate"
            style={{ maxWidth: "100%", minHeight: "1.1rem" }}
            title={employee.position}
          >
            {employee.position}
          </Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Email:</strong> {employee.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Salary:</strong>{" "}
              ${employee.salary.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Date of Joining:</strong>{" "}
              {new Date(employee.dateOfJoining).toLocaleDateString()}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default EmployeeCard;

