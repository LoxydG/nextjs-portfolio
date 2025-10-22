"use Client";
import "./About.css"
import Image from 'next/image'
import Logo from "@/public/Logo.png";

function About() {
  return (
    <div id="about" className='about'>
      <h1 className='text-center font-bold text-2xl'>About</h1>
      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="content">
        <div className="row1">
          <Image style={{borderRadius: "50%", marginBottom: "10px"}} src={Logo} alt='logo' className='w-3xs'/>
        </div>
        <div className="row2">
          <div>
            <p>
              This is a simple Next.js application that demonstrates the use of components, styling, and image optimization. The application consists of a main page that includes an About section with an image and some text. The image is optimized using Next.js's built-in Image component, which provides automatic resizing and lazy loading for better performance.
            </p>
            <div className="row">
              <div className="launge">
                <h2 className='font-bold text-xl'>Languge</h2>
                <ul>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div className="launge">
                <h2 className='font-bold text-xl'>Education</h2>
                <p>
                  Bachelor's degree in Computer Science from XYZ University.
                </p>
              </div>
              <div className="launge">
                <h2 className='font-bold text-xl'>Project</h2>
                <p>
                  Developer of general (Game, Web, Desktop and Mobile) projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About