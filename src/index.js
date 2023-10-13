import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./App";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<Outlet />}>
            <Route index element={<About />} />
          </Route>
          <Route path="contact" element={<Outlet />}>
            <Route index element={<Contact />} />
          </Route>
          <Route path="Cart" element={<Outlet />}>
            <Route index element={<Cart />} />
          </Route>
          <Route path="restaurants/:resId" element={<Outlet />}>
            <Route index element={<RestaurantMenu />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
