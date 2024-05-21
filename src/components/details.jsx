import React from "react";
import "./details.css";
import Profile from "../img/Photo.png";
import Project1 from "../img/Screenshot 2024-05-15 180603.png";
import Project2 from "../img/multiMart.png";
import SignIn from "../img/SignIn.png";
import Login from "../img/Login.png";

const details = () => {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg text-white navbar-light bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#header"
                >
                  About me
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#education"
                >
                  Education
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#Experience"
                >
                  Experience
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* navbar end here */}
      <div className="container">
        <div className="header" id="header">
          <h1>
            <img src={Profile} alt="" /> <br />
            Hey, I am Sohaib Ahmed Khanzada
          </h1>
          <p className="about">
            Motivated and adaptable eager to contribute and learn. Passionate
            Web Developer and UX/UI designer. Dedicated of Pixel Perfect web.
          </p>
          <div className="contact-link">
            <a href="https://www.linkedin.com/in/sohaib-ahmed-5b8684204/">
              <i class="fa-brands fa-linkedin"></i>LinkedIn
            </a>
            <a href="https://github.com/KhanzadaSohaib">
              <i class="fa-brands fa-github"></i>GitHub
            </a>
            <a href="">
              <i class="fa-solid fa-envelope"></i>shobiikhanzada@gmail.com
            </a>
            <a href="">
              <i class="fa-solid fa-file-invoice"></i>CV
            </a>
          </div>
        </div>

        {/* Education details */}

        <div className="education" id="education">
          <h2>
            <i class="fa-solid fa-graduation-cap"></i> Education
          </h2>
          <div className="education-details">
            <p className="red">Sep 2020 - Continue</p>
            <p className="yellow">
              Bachelor of Computer Science from the Fedral Urdu University.
            </p>
            <p className="pb-5">
              Computer science is the study of computers and computational
              systems. It encompasses both theoretical studies of algorithms and
              practical approaches to the design and implementation of software
              and hardware systems.
            </p>
            <p className="red">Aug 2022 - Jan 2023</p>
            <p className="yellow">
              Game Development Program at the Sir Syed University in Karachi.
            </p>
            <p>Focusing on Programming Languages and creating own games.</p>
          </div>
        </div>
        {/* Languages */}

        <div className="language">
          <h2>
            <i class="fa-solid fa-language"></i> Languages
          </h2>
          <p className="w-100">Urdu</p>
          <p className="w-75">Sindhi</p>
          <p className="w-50">English</p>
        </div>

        {/* Skills */}

        <div className="skills">
          <h2>
            <i class="fa-solid fa-hashtag"></i> Skills
          </h2>
          <h4>Web Development:</h4>
          <div className="skills-detail">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
            <p>TAILWIND CSS</p>
          </div>

          <h4>Framework:</h4>
          <div className="skills-detail">
            <p>REACT JS</p>
            <p>NEXT JS</p>
          </div>

          <h4>Design Programs:</h4>
          <div className="skills-detail">
            <p>Figma</p>
          </div>

          <h4>Version Control:</h4>
          <div className="skills-detail">
            <p>GIT</p>
            <p>
              <a href="https://github.com/KhanzadaSohaib">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </p>
          </div>

          <h4>Package Managers:</h4>
          <div className="skills-detail">
            <p>NPM</p>
          </div>
        </div>

        {/* Experience */}

        <div className="Experience" id="Experience">
          <h2>
            <i class="fa-solid fa-briefcase"></i> Experience
          </h2>

          <div className="education-details">
            <p className="red">may 2023 - Continue</p>
            <p className="yellow">Frontend Developer - Geeks of kolachi</p>
            <p className="pb-5">
              Planning, design and development of new projects to digitize
              companies. Contribute to the maintenance and updating of +30
              websites.
            </p>
            <p className="red">jan 2024 - Continue</p>
            <p className="yellow">
              Internship Frontend Developer - Geeks of kolachi
            </p>
            <p>
              Develop and design projects strengthening skills in HTML, CSS,
              JavaScript and Figma. Work on projects acquiring different skills
              in analytics, SEO and various technologies.
            </p>
          </div>
        </div>

        {/* Projects */}

        <div className="Projects">
          <h2>
            <i class="fa-solid fa-code"></i> Projects
          </h2>
          <h4 className="yellow">Personal Portfolio</h4>
          <p>
            Developed an interactive web application using Astro and Tailwind.
            Designed to be a reflective space for personal and professional
            growth, with a focus on simplicity and minimalism.
          </p>
          <div className="skills-detail">
            <p>
              <a href="https://github.com/KhanzadaSohaib">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </p>
            <p>FIGMA</p>
          </div>
          <img src={Project1} alt="" />

          {/* 2nd Project  */}

          <h4 className="yellow pt-5">Multi Mart E-Commerce</h4>
          <p>
            Developed an interactive web application using React and Tailwind.
            Designed to be a reflective space for personal and professional
            growth, with a focus on simplicity and minimalism.
          </p>
          <div className="skills-detail">
            <p>
              <a href="https://github.com/KhanzadaSohaib/Multi-Mart">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </p>
          </div>
          <img src={Project2} alt="" />

          {/* 3rd Project  */}

          <h4 className="yellow pt-5">Sign In and Login Form</h4>
          <p>
            A login form utilizes the credentials of a user, in order to
            authenticate their access. It generally consists of the typical
            username or email and password. But more fields can be added to
            improve the site's security. These can be in the form of a passcode,
            PIN number, or a secret phrase.
          </p>
          <div className="skills-detail">
            <p>
              <a href="https://github.com/KhanzadaSohaib/Login-Signup-form">
                <i class="fa-brands fa-github"></i> GitHub
              </a>
            </p>
          </div>
          <img className="p-2" src={SignIn} alt="" />
          <img src={Login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default details;
