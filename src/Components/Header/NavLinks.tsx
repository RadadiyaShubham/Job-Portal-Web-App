import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const NavLinks = () => {

  const profile = useSelector((state: any) => state.profile);
  console.log(profile)
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Job", url: profile.accountType==="APPLICANT"?"/":"post-job/0" },
    { name: "Posted Job", url: profile.accountType==="APPLICANT"?"/": "posted-job/0" },
    { name: "Job History", url: "job-history" },
  ];

  const location = useLocation();
  return (
    <div className="flex gap-5 bs-mx:!hidden text-mine-shaft-100 h-full items-center">
      {links.map((link, index) => (
        <div key={index} className="h-full flex items-center">
          <Link
            className={`relative px-2 py-1 transition-all duration-300 hover:text-bright-sun-400 ${
              location.pathname === "/" + link.url
                ? "text-bright-sun-400 after:w-full after:bg-yellow-400"
                : "after:w-0 after:bg-transparent"
            } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300`}
            to={link.url}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;