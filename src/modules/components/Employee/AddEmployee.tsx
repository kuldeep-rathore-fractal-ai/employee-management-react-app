import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddEmployee = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (formData: any) => {
    setIsLoading(true);
    const ADD_EMPLOYEE_API_URL = "http://localhost:3000/api/v1/employees";

    axios
      .post(ADD_EMPLOYEE_API_URL, formData)
      .then((response) => {
        console.log("Employee added successfully:", response.data);
        setIsLoading(false);
        setIsCreated(true);
        setIsError(false);
        reset(); // clear form after success
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
        setIsLoading(false);
        setIsError(true);
        setIsCreated(false);
      });
  };

  return (
    <div className="container py-4">
      {/* Success Alert */}
      {isCreated && (
        <div className="alert alert-success text-center" role="alert">
          <strong>Success!</strong> Employee added successfully.
        </div>
      )}

      {/* Error Alert */}
      {isError && (
        <div className="alert alert-danger text-center" role="alert">
          <strong>Error!</strong> Failed to add employee. Please try again.
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Add Employee</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="position" className="form-label">
                Position
              </label>
              <input
                type="text"
                id="position"
                {...register("position")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">
                Department
              </label>
              <input
                type="text"
                id="department"
                {...register("department")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">
                Salary
              </label>
              <input
                type="number"
                id="salary"
                {...register("salary")}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dateOfJoining" className="form-label">
                Date of Joining
              </label>
              <input
                type="date"
                id="dateOfJoining"
                {...register("dateOfJoining")}
                className="form-control"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Employee"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;