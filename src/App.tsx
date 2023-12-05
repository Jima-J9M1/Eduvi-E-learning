import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./Utils/Contexts/ModalContext";
import { AuthProvider } from "./Utils/Contexts/AuthProvider";

// only add provider wrappers here

const queryClient = new QueryClient();

function App() {
  return (
    <>
     <AuthProvider>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;