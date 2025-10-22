import React from 'react'
import Image from 'next/image'
import "./Projects.css"
import ECommerce from "@/public/E-Commerce.png";
import SunnyLand from "@/public/SunnyLand.jpeg";
import TodoApp from "@/public/TodoApp.png";

function Projects() {
  const projects = [
    { 
      id:1,
      img:{ src:ECommerce, alt:"E-Commerce photo" },
      h1:"E-commerce",
      p:"E-commerce website built with React and Redux for state management. Features include product listings, shopping cart, and user authentication",
      a:{ a1:"", a2:"" }
    },
    { 
      id:1,
      img:{ src: SunnyLand, alt:"Sunny Land photo" },
      h1:"Sunny Land",
      p:"Sunny Land game built with Unity. Features include 3D graphics, character movement, and interactive gameplay.",
      a:{ a1:"", a2:"" }
    },
    { 
      id:1,
      img:{ src: TodoApp, alt:"Todo App logo" },
      h1:"Todo App",
      p:"A simple Todo application built with React. Features include adding, editing, and deleting tasks, as well as marking tasks as completed.",
      a:{ a1:"", a2:"" }
    }
  ]

  return (
    <div id='projects sections' className='Projects'>
      <h1 className='text-2xl text-center font-bold'>Projects</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, esse!</p>
      <div className="project-rows">
        {projects.map((project) => (
          <div className="rows" key={project.id}>
            <div className="img">
              <Image style={{ marginBottom: 10, borderRadius: 20 }} src={project.img.src} alt={project.img.alt} />
            </div>
            <h2 className='font-bold text-2xl text-center'>{project.h1}</h2>
            <p className='text-center'>{project.p}</p>
            <div className="links">
              <a href={project.a.a1} target="_blank">Live Demo</a>
              <a href={project.a.a2} target="_blank">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects