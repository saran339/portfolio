import { Link } from "react-scroll";

const TopContent = () => {
  return (
      <div className="topContent">
        <div className="topContent__container">
          <h1>Mr.Saran p</h1>
          <p>A Professional Web Developer</p>
          <a href="www.google.com">
                <button>Download CV</button>
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button>
              My Work
            </button>
          </Link>
        </div>
      </div>
  );
};

export default TopContent;