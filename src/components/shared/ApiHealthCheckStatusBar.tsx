import Alert from "react-bootstrap/Alert";
import { useApiHealthCheck } from "../../hooks/useApiHealthCheck";

const ApiHealthCheckStatusBar = () => {
  const { isApiUp, errorMessage } = useApiHealthCheck();
  if (isApiUp) return null;

  return (
    <Alert
      variant="warning"
      className="api-status-bar mb-0 rounded-0 text-center py-2"
      role="status"
      aria-live="polite"
    >
      API is not running. Please start the backend server.
      {errorMessage && (
        <div className="small mt-1 text-muted">{errorMessage}</div>
      )}
    </Alert>
  );
};

export default ApiHealthCheckStatusBar;

