import React from "react";
import "./headerButton.css";
import { NavLink } from "react-router-dom";

function HeaderButton({ data: { name, link, customCss, img } }) {
  const handleClick = () => {
    console.log("Le hice click a esta ruta, ", link);
  };

  if (img) {
    return (
      <li className={`header__button ${customCss}`}>
        <img src={img} alt={name} />
      </li>
    );
  }
  return (
    <li
      onClick={handleClick}
      className={`header__button header__button--link ${customCss}`}
    >
      <NavLink to={link}>{name}</NavLink>
    </li>
  );
}

export default HeaderButton;
