"use client";
import "./Navigation.css";
import { useContext, useEffect, useState } from "react";
import { NavToHeroContext } from "@/contextData/NavToHeroContext";
import { motion } from "framer-motion";
import Link from "next/link";

function Navigation() {
  const { isShowMenu, setIsShowMenu } = useContext(NavToHeroContext);
  const [changeMenu, setChangeMenu] = useState("fa-solid fa-bars");

  function handleMenuClick() {
    setIsShowMenu(!isShowMenu);
    setChangeMenu(isShowMenu ? "fa-solid fa-bars" : "fa-solid fa-xmark");

  }

  useEffect(() => {
    const navMenuLinks = document.querySelectorAll("#nav-menu");
    navMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setIsShowMenu(false);
        setChangeMenu("fa-solid fa-bars");
      });
    });

    const menuIcon = document.querySelector(".mobile-menu i");
    menuIcon.style.transition = "all 0.3s ease-in-out";
    menuIcon.setAttribute("aria-expanded", isShowMenu);


    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    menu.setAttribute("aria-expanded", isShowMenu);
  });

  const navLinks = [
    { id: 1, title: "Hero", href: "#hero" },
    { id: 2, title: "About", href: "#about" },
    { id: 3, title: "Services", href: "#services" },
    { id: 4, title: "Projects", href: "#projects" },
    { id: 5, title: "Contact", href: "#contact" },
  ];

  return (
    <motion.div>
      <nav className="header">
        <div className="left-side">
          <h2 className="font-bold">Portfolio.</h2>
        </div>
        <div className="right-side">
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link className="font-light" href={navLink.href}>{navLink.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mobile-menu">
          <i onClick={handleMenuClick} className={changeMenu}></i>
        </div>
      </nav>

      <div className={`menu ${isShowMenu ? "show-menu" : ""}`}>
        <ul className="text-center">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link id="nav-menu" className="font-light text-center" href={navLink.href}>{navLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Navigation;