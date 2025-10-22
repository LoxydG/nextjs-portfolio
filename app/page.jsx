"use client";
import "./globals.css";
import { useState, useEffect, useContext } from "react";
import { NavToHeroContext } from "@/contextData/NavToHeroContext";
import Navigation from "@/Componnents/Navigation/Navigation";
import Hero from "@/Componnents/Hero/Hero";
import About from "@/Componnents/About/About";
import Services from "@/Componnents/Services/Services";
import Projects from "@/Componnents/Projects/Projects";
import Contact from "@/Componnents/Contact/Contact";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false); // رفع الحالة هنا

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsShowBtn(window.scrollY > 400);
    };
    const elements = document.querySelectorAll('.sections');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.style.visibilty = 'visible';
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('in-view');
          entry.target.style.visibilty = 'hidden';
        }
      })
    }, { threshold: 0.2, rootMargin: "0px 0px -100px 0px" });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <NavToHeroContext.Provider value={{ isShowMenu, setIsShowMenu }}>
      <div className={`background`}>
        {isShowBtn && (
          <button onClick={scrollToTop} className="up">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        )}
        <Navigation />
        <div className={isShowMenu ? "opacity-black" : "opacity-100"}>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>
    </NavToHeroContext.Provider>
  );
}