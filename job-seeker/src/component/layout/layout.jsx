import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};