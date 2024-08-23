import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="flex justify-between items-center ">
        <img
          src="./src/components/ui/image.png"
          className=" h-16 w-28 max-md:h-12 max-md:w-24 "
        />
        <p className="text-white relative left-10 font-work max-md:hidden">
          &copy; 2024 All Rights Reserved | Arjun Gupta
        </p>
        <div className="flex text-white mr-8 max-md:mr-2 gap-2 ">
          <a
            href="https://www.instagram.com/_arjungupta29/"
            target="_"
            className="hover:scale-110"
            title="Instagram"
          >
            <InstagramIcon className="mr-2 max-md:mr-1 cursor-pointer" />
          </a>
          <a
            href="https://github.com/Arjung352/"
            target="_"
            className="hover:scale-110"
            title="Github"
          >
            <GitHubIcon className="mr-2 max-md:mr-1 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-gupta-948b11291"
            target="_"
            className="hover:scale-110"
            title="LinkedIn"
          >
            <LinkedInIcon className="cursor-pointer mr-2 max-md:mr-1" />
          </a>
          <a
            href="mailto:arjung7751@gmail.com"
            target="_"
            className="hover:scale-110"
            title="Mail"
          >
            <MailOutlineIcon className="cursor-pointer mr-2 max-md:mr-1" />
          </a>
          <a
            href="https://x.com/_arjungupta29"
            target="_"
            className="hover:scale-110"
            title="Twitter"
          >
            <XIcon className="cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
