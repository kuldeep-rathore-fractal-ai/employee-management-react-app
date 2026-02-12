

# Capstone Project: Employee Management System

This project is a full-stack assignment to demonstrate CRUD operations for an Employee Management System. The frontend is built with React, TypeScript, and Vite, styled using Bootstrap React, and communicates with a Node.js backend API. The goal is to provide a modern, responsive, and user-friendly interface for managing employee records.

---

## Author
**Kuldeep Rathore**

---

## Project Structure

```
employee-management-react-app/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── api/
│   │   ├── apiClient.ts
│   ├── components/
│   │   ├── employees/
│   │   │   ├── EmployeeCard.tsx
│   │   │   ├── EmployeeCreate.tsx
│   │   │   ├── EmployeeDetails.tsx
│   │   │   └── EmployeeEdit.tsx
│   │   └── shared/
│   │       ├── ApiHealthCheckStatusBar.tsx
│   │       ├── Footer.tsx
│   │       └── Header.tsx
│   ├── hooks/
│   │   └── useApiHealthCheck.ts
│   ├── models/
│   │   └── employee.ts
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── HomePage.tsx
│   │   └── employees/
│   │       ├── EmployeeListPage.tsx
│   │       └── index.ts
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── services/
│   │   └── employeeService.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

---

## Features
- **Employee CRUD Operations**: Create, read, update, and delete employee records
- **Employee Listing**: View all employees in a responsive list view with pagination support
- **Employee Details**: View comprehensive information for individual employees
- **Search & Filter**: Find employees efficiently by name or other attributes
- **Responsive UI**: Built with Bootstrap React for seamless experience across all devices
- **Real-time Feedback**: API status bar provides visual feedback for all operations
- **Error Handling**: Graceful error handling with user-friendly messages
- **TypeScript Integration**: Full type safety throughout the application

---

## Tech Stack
- React
- TypeScript
- Vite
- Bootstrap React
- Node.js (Backend API)

---

## Backend API
This project uses the [employee-management-api](http://localhost:3000) Node.js backend for API calls. Make sure the backend server is running on port **3000** before starting the frontend application.

**Backend URL:** [http://localhost:3000](http://localhost:3000)

---

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
	```sh
	git clone <repo-url>
	cd employee-management-react-app
	```
2. Install dependencies:
	```sh
	npm install
	```
3. **Verify Backend API is Running**: Ensure the Node.js backend is running on `http://localhost:3000`
	```sh
	# In the backend project directory
	npm install
	npm start
	```
4. Start the frontend development server:
	```sh
	npm run dev
	```
   The application will open at `http://localhost:5173` by default.

---

## Scripts
The following npm scripts are available:

| Script      | Description                       |
|-------------|-----------------------------------|
| `dev`       | Start the development server on localhost:5173 |
| `build`     | Build the project for production  |
| `preview`   | Preview the production build      |
| `lint`      | Run ESLint on the project         |

---

## Usage

1. **Homepage**: Navigate to the home page to see an overview of the application
2. **Employee List**: Click "Employees" to view all employees in the system
3. **Create Employee**: Use the "Add Employee" button to create new employee records
4. **View Details**: Click on an employee card to view full employee details
5. **Edit Employee**: Update employee information from the details page
6. **Delete Employee**: Remove employees from the system (with confirmation)

---

## Error Handling

The application implements comprehensive error handling:
- **API Errors**: Failed requests display user-friendly error messages via the ApiStatusBar
- **Validation**: Form validation prevents invalid data submission
- **Connection Issues**: Visual feedback indicates when the backend is unreachable
- **Status Bar**: Real-time status updates show success, error, and loading states

---

## Building for Production

To create a production build:
```sh
npm run build
```

The optimized build will be created in the `dist/` directory. To preview the production build:
```sh
npm run preview
```

---

## Assignment Requirements
- ✅ Build a responsive Employee Management System frontend using React and Bootstrap React
- ✅ Integrate with the Node.js backend API for all CRUD operations
- ✅ Demonstrate clean code, component structure, and best practices
- ✅ Provide clear instructions for running and building the project
- ✅ Type-safe implementation with TypeScript
- ✅ Responsive design across all screen sizes
- ✅ Proper error handling and user feedback

---

## License
This project is for educational and demonstration purposes.
