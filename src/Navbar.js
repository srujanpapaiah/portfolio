import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#" className="nav-logo">
          {" "}
          Srujan Papaiahgari{" "}
        </a>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <a href="resume.pdf" className="nav-anchors">
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a href="./skills/" className="nav-anchors">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://srujanpapaiahgari.hashnode.dev/"
            className="nav-anchors"
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="./projects" className="nav-anchors">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="mailto:srujanpapaiahgari@gmail.com" className="nav-anchors">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <ion-icon name="moon-outline" className="mode dark"></ion-icon>
          <ion-icon
            name="sunny-outline"
            className="mode bright hidden"
          ></ion-icon>
        </li>
      </ul>

      <button class="btn--mobile-nav">
        <ion-icon class="icon--mobile-nav open" name="menu-outline"></ion-icon>
        <ion-icon
          class="icon--mobile-nav close hidden"
          name="close-outline"
        ></ion-icon>
      </button>

      <div className="mobile hidden">
        <ul className="mobile-nav">
          <li>Projects</li>
          <li>Projects</li>
          <li>Projects</li>
          <li>Projects</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
