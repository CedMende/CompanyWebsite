import React, { Component } from "react";
import { AlertTriangle } from "lucide-react";
interface Props {
  children: React.ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error
    };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Here you could send to your error tracking service
    // Example: Sentry.captureException(error);
  }
  public render() {
    if (this.state.hasError) {
      return <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4" role="alert" aria-live="assertive">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {this.state.error?.message || "An unexpected error occurred"}
            </p>
            <button onClick={() => window.location.reload()} className="bg-violet-700 dark:bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-800 dark:hover:bg-violet-700 transition-colors">
              Reload Page
            </button>
          </div>
        </div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;