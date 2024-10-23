import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./js/home.jsx";
import ResourceError from "./js/ResourceError.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ResourceError />}>
        <Route element={<Home />} index />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
