import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import {
  getEmployeeById,
  updateEmployeeById,
} from "../../../services/employeeService";

type EmployeeFormData = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  dateOfJoining: string;
};

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<EmployeeFormData>({
    mode: "onBlur",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    if (!id) {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    getEmployeeById(id)
      .then((data) => {
        reset({
          ...(data as EmployeeFormData),
          dateOfJoining: data.dateOfJoining
            ? new Date(data.dateOfJoining).toISOString().substring(0, 10)
            : "",
        });
      })
      .catch((error) => {
        console.error("Error loading employee for update:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, reset]);

  const onSubmit = (formData: EmployeeFormData) => {
    setIsError(false);
    setIsUpdated(false);

    if (!id) return;

    updateEmployeeById(id, formData)
      .then((response) => {
        console.log("Employee updated successfully:", response);
        setIsUpdated(true);
        // Navigate back to details after a short delay
        setTimeout(() => {
          navigate(`/employees/${id}`);
        }, 800);
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
        setIsError(true);
      });
  };

  return (
    <Container className="py-4">
      {isUpdated && (
        <Alert variant="success" className="text-center">
          <strong>Saved!</strong> Employee details have been updated.
        </Alert>
      )}

      {isError && !isLoading && (
        <Alert variant="danger" className="text-center">
          <strong>Error!</strong> We couldn&apos;t update the employee right
          now. Please try again.
        </Alert>
      )}

      <Card className="shadow-sm border-0">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="mb-0 fs-4">Update Employee</Card.Title>
            <Button
              as={Link as any}
              to="/employees"
              variant="secondary"
              size="sm"
            >
              Back to Employee List
            </Button>
          </div>

          {isLoading ? (
            <div className="d-flex justify-content-center py-4">
              <Spinner animation="border" role="status" variant="secondary">
                <span className="visually-hidden">Loading employee...</span>
              </Spinner>
            </div>
          ) : (
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("firstName", {
                        required: "First name is required",
                        validate: (value) =>
                          value.trim().length > 0 ||
                          "First name must be a string",
                      })}
                      placeholder="Enter first name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("lastName", {
                        required: "Last name is required",
                        validate: (value) =>
                          value.trim().length > 0 ||
                          "Last name must be a string",
                      })}
                      placeholder="Enter last name"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                      placeholder="name@example.com"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="position">
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("position", {
                        required: "Position is required",
                        validate: (value) =>
                          value.trim().length > 0 ||
                          "Position must be a string",
                      })}
                      placeholder="e.g. Software Engineer"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      {...register("department", {
                        required: "Department is required",
                        validate: (value) =>
                          value.trim().length > 0 ||
                          "Department must be a string",
                      })}
                      placeholder="e.g. Development"
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="salary">
                    <Form.Label>Salary</Form.Label>
                    <Form.Control
                      type="number"
                      {...register("salary", {
                        required: "Salary is required",
                        valueAsNumber: true,
                        validate: (value) =>
                          typeof value === "number" && !Number.isNaN(value)
                            ? true
                            : "Salary must be a number",
                      })}
                      placeholder="e.g. 60000"
                      min={0}
                    />
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group controlId="dateOfJoining">
                    <Form.Label>Date of Joining</Form.Label>
                    <Form.Control
                      type="date"
                      {...register("dateOfJoining", {
                        required: "Date of Joining is required",
                      })}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                type="submit"
                className="mt-4 w-100 fw-semibold"
                variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateEmployee;

