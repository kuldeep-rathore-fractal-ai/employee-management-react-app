import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  ListGroup,
  Button,
  Spinner,
  Alert,
  Modal,
} from "react-bootstrap";
import type { Employee } from "../../../types/employee";
import {
  deleteEmployeeById,
  getEmployeeById,
} from "../../../services/employeeService";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchEmployee = () => {
    setIsLoading(true);
    setIsError(false);

    if (!id) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    getEmployeeById(id)
      .then((data) => {
        setEmployee(data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const handleDelete = () => {
    if (!id) return;

    deleteEmployeeById(id)
      .then(() => {
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
    setShowModal(false);
  };

  const formattedDate =
    employee && new Date(employee.dateOfJoining).toLocaleDateString();

  const formattedSalary =
    employee &&
    employee.salary.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body className="p-4 p-md-5">
          <Card.Title className="text-center mb-4 fs-3">
            Employee Details
          </Card.Title>

          {isLoading && (
            <div className="d-flex justify-content-center py-4">
              <Spinner animation="border" role="status" variant="secondary">
                <span className="visually-hidden">Loading employee...</span>
              </Spinner>
            </div>
          )}

          {isError && !isLoading && (
            <Alert variant="danger" className="text-center">
              <p className="mb-3">
                Failed to load employee details. Please try again.
              </p>
              <Button variant="outline-danger" size="sm" onClick={fetchEmployee}>
                Retry
              </Button>
            </Alert>
          )}

          {!isLoading && !isError && employee && (
            <>
              <ListGroup className="mb-4">
                <ListGroup.Item>
                  <strong>Name:</strong> {employee.firstName}{" "}
                  {employee.lastName}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {employee.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Position:</strong> {employee.position}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Department:</strong> {employee.department}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Salary:</strong> ${formattedSalary}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Date of Joining:</strong> {formattedDate}
                </ListGroup.Item>
              </ListGroup>

              <div className="d-flex flex-column flex-md-row gap-2">
                <Button
                  as={Link}
                  to={`/employees/${id}/edit`}
                  variant="secondary"
                  className="w-100"
                >
                  Edit Employee
                </Button>
                <Button
                  variant="danger"
                  className="w-100"
                  onClick={() => setShowModal(true)}
                >
                  Delete Employee
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this employee? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EmployeeDetails;

