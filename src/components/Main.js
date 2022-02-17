import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import Resume from "./Resume";
import ThemeSwitcher from "./ThemeSwitcher";

const Main = () => {
  return (
    <>
      <ThemeSwitcher />
      <Hero />
      <Resume />
      <Contact />
    </>
  );
};

export default Main;
