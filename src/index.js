import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import App from "./App";
import AuthProvider from "./Context/AuthProvider";
import DataContext from "./Context/DataContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataContext>
          <App />
        </DataContext>
      </AuthProvider>
    </QueryClientProvider>
  
);
