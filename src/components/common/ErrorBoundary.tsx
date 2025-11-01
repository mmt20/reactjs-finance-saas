import React, { Component, type ErrorInfo } from "react";
import { Button } from "@/components/common/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  statusCode: number;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      statusCode: 500,
      message: "Something went wrong",
    };
  }

  static getDerivedStateFromError(
    error: Error & { response?: { status?: number }; status?: number; statusCode?: number }
  ) {
    // Extract status code from error
    const statusCode = error?.response?.status || error?.status || error?.statusCode || 500;

    // Get user-friendly message
    const messages: Record<number, string> = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Access Denied",
      404: "Page Not Found",
      500: "Server Error",
      502: "Bad Gateway",
      503: "Service Unavailable",
    };

    const message = messages[statusCode] || "Something went wrong";

    return { hasError: true, statusCode, message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, statusCode: 500, message: "Something went wrong" });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <div className="rounded-lg border border-border bg-card p-8 md:p-12 text-center max-w-lg w-full">
            {/* Status Code */}
            <h1 className="text-8xl font-bold text-destructive/20 mb-4">{this.state.statusCode}</h1>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-destructive/10 rounded-full p-4 border border-destructive/20">
                <AlertTriangle className="h-10 w-10 text-destructive" strokeWidth={2} />
              </div>
            </div>

            {/* Message */}
            <h2 className="text-2xl font-bold mb-3 text-foreground">{this.state.message}</h2>
            <p className="text-muted-foreground text-sm mb-8">Please try again or go back to the home page.</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReset} variant="accent" size="lg">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button onClick={this.handleGoHome} variant="light" size="lg">
                <Home className="h-4 w-4" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
