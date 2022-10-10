import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
