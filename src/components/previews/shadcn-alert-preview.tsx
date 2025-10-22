import { Alert, AlertDescription, AlertTitle } from "@/components/ui/shadcn/alert";
import { Terminal } from "lucide-react";

export function ShadcnAlertPreview() {
  return (
    <Alert className="w-full max-w-sm">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}
