import { RouterProvider } from "@/app/providers";
import { AuthProvider } from "@/features/auth";

export function App() {
  return (
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  );
}
