import PageLayout from "./PageLayout";
import { LayoutProvider } from "./LayoutContext";

export default function ProtectedRoute({ children }) {
  return (
    <LayoutProvider>
      <PageLayout>{children}</PageLayout>
    </LayoutProvider>
  );
}