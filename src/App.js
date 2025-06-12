import React from 'react';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Change to true to enable error
    this.state = { hasError: true };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(err, errInfo) {
    console.log('something went horribly wrong', err, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h3>Fallback UI</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <div>
      <h3>Outside the error boundary</h3>
      <ErrorBoundary>
        <h3>Inside the error boundary</h3>
      </ErrorBoundary>
    </div>
  );
}

export default App;
