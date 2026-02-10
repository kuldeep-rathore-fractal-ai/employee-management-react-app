import Footer from './shared/components/Footer';
import Header from './shared/components/Header';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import EmployeePage from './pages/employees/EmployeePage';
import AddEmployee from './modules/components/Employee/AddEmployee';
import EmployeeDetails from './modules/components/Employee/EmployeeDetails';

const App = () => (
  <>
    <Header />
     <main>
        {/* Routing Configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/employees" element={<EmployeePage />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/employees/add" element={<AddEmployee />} />
        </Routes>
      </main>
    <Footer />
  </>
);

export default App;
