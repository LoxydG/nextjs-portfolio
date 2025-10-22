"use client";
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";

function Hero() {
  const jobs = [
    { id: 1, title: "Full Stack Developer" },
    { id: 2, title: "Game Developer" },
    { id: 3, title: "Cross-Platform Developer" },
  ]
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % jobs.length)
    },3000)
    return () => clearInterval(interval);
  },[jobs.length])
  return (
    <div id="hero" className="hero">
      <div className="hero-content">
        <Image style={{width:70, margin: "0 auto", borderRadius: "50%", marginBottom: 10}} src={Logo}/>
        <p style={
          {
            fontSize: 12, 
            color: "black",
            margin: "0 auto", 
            width: "fit-content",
            marginBottom: 10,
            }
          }
        >Hi, iam Rayan👋</p>
        <AnimatePresence mode="wait">
          <motion.h1 
          className="text-5xl font-bold text-blue-600 text-center"
          key={jobs[current].id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.4, ease: "easeOut" }}
          >
            {jobs[current].title}
          </motion.h1>
        </AnimatePresence>
        <p
        className="text-center"
        style={{marginTop: 10}}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, quis voluptate, atque suscipit temporibus mollitia aperiam, et dolorum odit odio a unde consectetur. Fugit est porro, praesentium perferendis corporis ipsa.
        </p>
        <div className="flex justify-center gap-5 link-btn" style={{marginTop: 10}}>
          <a
           href="" 
           className="link1"
           style={{padding: 10, borderRadius: 12}}
           >
            View my Store <span>
              <i class="fa-solid fa-store"></i>
            </span>
          </a>
          <a
           href="" 
           className="link2"
           style={{padding: 10, borderRadius: 12}}
           >
            Contact me <span>
              <i class="fa-solid fa-arrow-down"></i>
            </span>
          </a>
        </div>
        <div className="links">
          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero