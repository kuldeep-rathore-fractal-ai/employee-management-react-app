import Alert from "react-bootstrap/Alert";

type ApiStatusBarProps = {
  visible: boolean;
};

const ApiStatusBar = ({ visible }: ApiStatusBarProps) => {
  if (!visible) return null;

  return (
    <Alert
      variant="warning"
      className="api-status-bar mb-0 rounded-0 text-center py-2"
      role="status"
      aria-live="polite"
    >
      API is not running. Please start the backend server.
    </Alert>
  );
};

export default ApiStatusBar;

