import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Main from "./pages/Main.tsx";
import ContactPage from "./pages/Contact.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/contacts",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Global />
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
