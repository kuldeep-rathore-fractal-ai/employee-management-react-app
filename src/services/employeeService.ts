import apiClient from "../api/apiClient";
import type { Employee } from "../models/employee";

const EMPLOYEES_PATH = "/employees";

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await apiClient.get<Employee[]>(EMPLOYEES_PATH);
  return response.data;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await apiClient.get<Employee>(`${EMPLOYEES_PATH}/${id}`);
  return response.data;
};

export const createEmployee = async (
  payload: Omit<Employee, "_id">
): Promise<Employee> => {
  const response = await apiClient.post<Employee>(EMPLOYEES_PATH, payload);
  return response.data;
};

export const updateEmployeeById = async (
  id: string,
  payload: Partial<Employee>
): Promise<Employee> => {
  const response = await apiClient.put<Employee>(
    `${EMPLOYEES_PATH}/${id}`,
    payload
  );
  return response.data;
};

export const deleteEmployeeById = async (id: string): Promise<void> => {
  await apiClient.delete(`${EMPLOYEES_PATH}/${id}`);
};

