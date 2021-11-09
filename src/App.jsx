import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { HomeScreen } from "./components/screens/HomseScreen/HomeScreen";
import { Sidebar } from "./components/Sidebar/Sidebar";
import "./app.scss";

export const App = () => {
  return (
    <>
      <div className="app">
        <header>
          <Navbar />
          <Sidebar />
        </header>

        <section className="sections">
          <HomeScreen />
        </section>
      </div>
    </>
  );
};
