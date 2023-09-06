import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Utils/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./Utils/Contexts/ModalContext";

// only add provider wrappers here

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ModalProvider>
    </>
  );
}

export default App;