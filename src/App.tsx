import React from "react";
import "./App.css";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import { HomePage } from "./components";

function App() {
  return (
    <MainLayout>
      <HomePage />
      my super data
    </MainLayout>
  );
}

export default App;
