import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { createEmployee } from "../../services/employeeService";
import type { Employee } from "../../models/employee";


const EmployeeCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Employee>({
    mode: "onBlur",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (formData: Employee) => {
    setIsLoading(true);

    createEmployee(formData as any)
      .then((response) => {
        console.log("Employee added successfully:", response);
        setIsLoading(false);
        setIsCreated(true);
        setIsError(false);
        reset();
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        setIsLoading(false);
        setIsError(true);
        setIsCreated(false);
      });
  };

  return (
    <Container className="py-4">
      {isCreated && (
        <Alert variant="success" className="text-center">
          <strong>Success!</strong> The employee was added successfully.
        </Alert>
      )}

      {isError && (
        <Alert variant="danger" className="text-center">
          <strong>Error!</strong> Something went wrong while adding the
          employee. Please try again.
        </Alert>
      )}

      <Card className="shadow-sm border-0">
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="mb-0 fs-4">Add New Employee</Card.Title>
            <Button
              as={Link as any}
              to="/employees"
              variant="secondary"
              size="sm"
            >
              Back to Employee List
            </Button>
          </div>

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
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName?.message}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName?.message}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.position}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.position?.message}
                  </Form.Control.Feedback>
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
                    placeholder="e.g. Engineering"
                    isInvalid={!!errors.department}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.department?.message}
                  </Form.Control.Feedback>
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
                    placeholder="e.g. 50000"
                    min={0}
                    isInvalid={!!errors.salary}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.salary?.message}
                  </Form.Control.Feedback>
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
                    isInvalid={!!errors.dateOfJoining}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.dateOfJoining?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              className="mt-4 w-100 fw-semibold"
              variant="secondary"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Employee"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeCreate;