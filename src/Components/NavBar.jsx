import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <h1 className=" text-3xl font-bold">Msseddy</h1>
      </div>
      <div className="flex items-center justify-center text-2xl gap-4 ">
        <a
          href="https://www.linkedin.com/in/mohamed-esseddyqy-640552246/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="white" />
        </a>
        <a
          href="https://github.com/Messeddy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="white" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
