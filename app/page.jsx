"use client";
import "./globals.css";
import { useState, useEffect, useContext } from "react";
import { NavToHeroContext } from "@/contextData/NavToHeroContext";
import Navigation from "@/app/Componnents/Navigation/Navigation";
import Hero from "@/app/Componnents/Hero/Hero";
import About from "@/app/Componnents/About/About";
import Services from "@/app/Componnents/Services/Services";
import Projects from "@/app/Componnents/Projects/Projects";
import Contact from "@/app/Componnents/Contact/Contact";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isShowBtn, setIsShowBtn] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false); // رفع الحالة هنا

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsShowBtn(window.scrollY > 400);
    };

    // سجّل مستمع الـ scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // تنظيف واحد يتضمن إزالة المستمع وفصل الـ observer
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <NavToHeroContext.Provider value={{ isShowMenu, setIsShowMenu }}>
      <div className={`background`}>
        {isShowBtn && (
          <button onClick={scrollToTop} className="up">
            <i className="fa-solid fa-arrow-up"></i> {/* className بدل class */}
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