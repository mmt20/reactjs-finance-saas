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
    error: Error & {
      response?: { status?: number };
      status?: number;
      statusCode?: number;
    },
  ) {
    // Extract status code from error, fallback to 500
    const statusCode =
      error?.response?.status || error?.status || error?.statusCode || 500;

    // If error has a custom message, use it; otherwise map status code
    const messages: Record<number, string> = {
      400: "Bad Request",
      401: "Unauthorized",
      403: "Access Denied",
      404: "Page Not Found",
      500: "Server Error",
      502: "Bad Gateway",
      503: "Service Unavailable",
    };

    const message =
      error.message || messages[statusCode] || "Something went wrong";

    return { hasError: true, statusCode, message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      statusCode: 500,
      message: "Something went wrong",
    });
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
        <div className="bg-background flex min-h-screen items-center justify-center px-4">
          <div className="border-border bg-card w-full max-w-lg rounded-lg border p-8 text-center md:p-12">
            {/* Status Code */}
            <h1 className="text-destructive/20 mb-4 text-8xl font-bold">
              {this.state.statusCode}
            </h1>

            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="bg-destructive/10 border-destructive/20 rounded-full border p-4">
                <AlertTriangle
                  className="text-destructive h-10 w-10"
                  strokeWidth={2}
                />
              </div>
            </div>

            {/* Message */}
            <h2 className="text-foreground mb-3 text-2xl font-bold">
              {this.state.message}
            </h2>
            <p className="text-muted-foreground mb-8 text-sm">
              Please try again or go back to the home page.
            </p>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                onClick={this.handleReset}
                variant="accent"
                size="lg"
                className="cursor-pointer"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
              <Button
                onClick={this.handleGoHome}
                variant="light"
                size="lg"
                className="cursor-pointer"
              >
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
