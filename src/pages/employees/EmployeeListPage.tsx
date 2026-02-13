import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Spinner,
    Alert,
    Stack,
} from "react-bootstrap";
import EmployeeCard from "../../components/employees/EmployeeCard";
import type { Employee } from "../../models/employee";
import { getEmployees } from "../../services/employeeService";

const EmployeeListPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [employees, setEmployees] = useState<Employee[]>([]);

    const fetchEmployees = () => {
        setIsLoading(true);
        setIsError(false);

        getEmployees()
            .then((data) => {
                setEmployees(data);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const hasEmployees = employees && employees.length > 0;

    return (
        <Container className="py-4">
            <Stack
                direction="horizontal"
                className="mb-4 flex-wrap gap-2 justify-content-between align-items-center"
            >
                <div>
                    <h1 className="h3 fw-bold mb-1 dark">Employees</h1>
                    <p className="text-muted mb-0">
                        Browse, manage, and keep your employee records up to date.
                    </p>
                </div>
                <div className="ms-auto">
                    <Button
                        as={Link as any}
                        to="/employees/add"
                        variant="secondary"
                        size="sm"
                        className="btn btn-success"
                    >
                        Add New Employee
                    </Button>
                </div>
            </Stack>

            {isLoading && (
                <div className="d-flex justify-content-center align-items-center py-5">
                    <Spinner animation="border" role="status" variant="secondary">
                        <span className="visually-hidden">Loading employees...</span>
                    </Spinner>
                </div>
            )}

            {isError && !isLoading && (
                <Alert variant="danger" className="text-center">
                    <p className="mb-2">
                        We couldn&apos;t load the employees right now. Please try again.
                    </p>
                    <Button variant="outline-danger" size="sm" onClick={fetchEmployees}>
                        Retry
                    </Button>
                </Alert>
            )}

            {!isLoading && !isError && !hasEmployees && (
                <Alert
                    variant="info"
                    className="text-center d-flex justify-content-center align-items-center"
                    style={{ minHeight: "200px" }}
                >
                    <p className="mb-2 m-0">No employees found yet.</p>
                </Alert>
            )}

            <hr />

            {hasEmployees && (
                <Row className="g-4">
                    {employees.map((employee) => (
                        <Col xs={12} md={6} lg={4} xl={4} key={employee._id}>
                            <EmployeeCard employee={employee} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};


export default EmployeeListPage;
