import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../../modules/components/Employee/EmployeeCard";

const EmployeePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/employees")
      .then((response) => {
        setIsLoading(false);
        setEmployees(response.data);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="container py-4">
      {/* Header with Add New Product button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4 fw-bold">Products</h1>
        <Link to="/employee/add">
          <button className="btn btn-primary fw-bold">
            Add New Employee
          </button>
        </Link>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="alert alert-danger text-center" role="alert">
          <p className="mb-2">Failed to load products. Please try again.</p>
          <button className="btn btn-danger fw-bold">Retry</button>
        </div>
      )}

      {/* Positive state */}
      {employees && employees.length > 0 && (
        <div className="row g-4">
          {employees.map((employee: any) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={employee._id}>
                <EmployeeCard key={employee._id} employee={employee} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmployeePage;