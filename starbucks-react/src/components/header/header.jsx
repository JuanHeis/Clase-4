import React from "react";
import HeaderButton from "./headerButton/headerButton";
import "./header.css";
import logo from "../../assets/ico/logo.svg";

const buttonList = [
  {
    name: "logo",
    link: "home",
    customCss: "",
    img: logo,
  },
  {
    name: "COFFEE",
    link: "cafe",
    customCss: "",
    img: "",
  },
  {
    name: "MENU",
    link: "menu",
    customCss: "",
    img: "",
  },
  {
    name: "EXPERIENCIA",
    link: "experiencia",
    customCss: "",
    img: "",
  },
  {
    name: "Localizar tienda",
    link: "https://www.google.com.ar/maps/search/Starbucks/@-34.6556054,-58.4823916,11z?entry=ttu",
    customCss: "header__button--right",
    img: "",
  },
];

function Header() {
  return (
    <header>
      <nav>
        <div className="wrapper">
          {/* ToDo: Buscar nombre de forma de escribir este css */}
          <ul className="header__container">
            {buttonList.map((aButton, index) => {
              return <HeaderButton key={index} data={aButton} />;
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
