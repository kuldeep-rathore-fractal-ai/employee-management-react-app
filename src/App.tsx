import ApiHealthCheckStatusBar from "./components/shared/ApiHealthCheckStatusBar";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <ApiHealthCheckStatusBar />
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default App;
