"use client";

import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-4">
          <Alert className="max-w-2xl">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  ⚠️ 문제가 발생했습니다
                </h2>
                <AlertDescription>
                  컴포넌트를 렌더링하는 중 오류가 발생했습니다.
                  <br />
                  페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
                </AlertDescription>
              </div>
              
              {process.env.NODE_ENV === "development" && this.state.error && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground">
                    에러 상세 정보 (개발 모드)
                  </summary>
                  <pre className="mt-2 p-3 bg-muted rounded text-xs overflow-auto max-h-60">
                    {this.state.error.toString()}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
              
              <div className="flex gap-2 pt-2">
                <Button
                  onClick={() => this.setState({ hasError: false, error: null })}
                  variant="default"
                >
                  다시 시도
                </Button>
                <Button
                  onClick={() => window.location.href = "/"}
                  variant="outline"
                >
                  홈으로 이동
                </Button>
              </div>
            </div>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}
