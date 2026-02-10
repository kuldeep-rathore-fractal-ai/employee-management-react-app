import Footer from './shared/components/Footer';
import Header from './shared/components/Header';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import EmployeeListPage from './pages/employees/EmployeeListPage';
import EmployeeCreatePage from './pages/employees/EmployeeCreatePage';
import EmployeeDetailsPage from './pages/employees/EmployeeDetailsPage';
import EmployeeEditPage from './pages/employees/EmployeeEditPage';

const App = () => (
  <>
    <Header />
    <main>
      {/* Routing Configuration */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/employees" element={<EmployeeListPage />} />
        <Route path="/employees/:id" element={<EmployeeDetailsPage />} />
        <Route path="/employees/add" element={<EmployeeCreatePage />} />
        <Route path="/employees/:id/edit" element={<EmployeeEditPage />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
