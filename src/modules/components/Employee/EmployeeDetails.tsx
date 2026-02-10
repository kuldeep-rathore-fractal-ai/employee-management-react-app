import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employee, setEmployee] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  const EMPLOYEE_API_URL = `http://localhost:3000/api/v1/employees/${id}`;

  useEffect(() => {
    axios
      .get(EMPLOYEE_API_URL)
      .then((response) => {
        setIsLoading(false);
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee details:", error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [EMPLOYEE_API_URL]);

  const handleDelete = () => {
    axios
      .delete(EMPLOYEE_API_URL)
      .then((response) => {
        console.log("Employee deleted successfully:", response.data);
        navigate("/employees"); // redirect to employee list
      })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h1 className="card-title text-center mb-4">Employee Details</h1>

          {/* Loading state */}
          {isLoading && (
            <div className="d-flex justify-content-center py-4">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Error state */}
          {isError && (
            <div className="alert alert-danger text-center" role="alert">
              Failed to load employee details. Please try again.
              <button className="btn btn-danger mt-3">Retry</button>
            </div>
          )}

          {/* Positive state */}
          {!isLoading && !isError && (
            <div className="list-group">
              <div className="list-group-item">
                <strong>Name:</strong> {employee.firstName} {employee.lastName}
              </div>
              <div className="list-group-item">
                <strong>Email:</strong> {employee.email}
              </div>
              <div className="list-group-item">
                <strong>Position:</strong> {employee.position}
              </div>
              <div className="list-group-item">
                <strong>Department:</strong> {employee.department}
              </div>
              <div className="list-group-item">
                <strong>Salary:</strong> ${employee.salary}
              </div>
              <div className="list-group-item">
                <strong>Date of Joining:</strong> {employee.dateOfJoining}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="mt-4">
            <Link to={`/employees/${id}/edit`}>
              <button className="btn btn-primary w-100 mb-2">Edit Employee</button>
            </Link>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-danger w-100"
            >
              Delete Employee
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete this employee? This action
                  cannot be undone.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeDetails;