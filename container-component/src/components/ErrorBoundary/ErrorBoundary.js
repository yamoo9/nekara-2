import './ErrorBoundary.scss';
import { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    errorMessage: '',
    componentStackInfo: '',
  };

  // static getDerivedStateFromError(error) {
  //   return { errorMessage: error.message };
  // }

  componentDidCatch({ message }, { componentStack }) {
    this.setState({
      errorMessage: message,
      componentStackInfo: componentStack,
    });
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div className="displayError" role="alert">
          {this.state.errorMessage}
        </div>
      );
    }

    return this.props.children;
  }
}
