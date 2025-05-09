import {
  IconBrandFacebook,
  IconCirclesRelation,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname !== "/signup" && location.pathname !== "/login" && location.pathname !== "/admin" && location.pathname !== "/admin-login" && location.pathname !== "/admin/jobs" && location.pathname !== "/admin/users" ? (
    <div className="pt-20 pb-5 flex gap-8 justify-around bg-mine-shaft-950 p-4 font-['poppins'] flex-wrap">
      <div className="flex flex-col w-1/4 sm-mx:w-1/3 xs-mx:w-1/2 xsm-mx:w-full gap-4">
        {/* <div className="flex gap-1 items-center text-bright-sun-400">
          <IconCirclesRelation className="h-6 w-6" stroke={2.5} />
          <div className="text-xl font-semibold"> CareerLink</div>
        </div> */}
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
          className="flex gap-1 items-center text-bright-sun-400 cursor-pointer"
        >
          <IconCirclesRelation className="h-7 w-7" stroke={2.5} />
          <span className="text-3xl font-semibold">CareerLink</span>
        </Link>

        <div className="text-sm text-mine-shaft-100">
          Job portal with user profiles, skill updates, certifications, work
          experience,and admin job postings.
        </div>
        {/* <div className="gap-3 flex text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div> */}
        <div className="gap-3 flex text-bright-sun-400 [&>a>div]:bg-mine-shaft-900 [&>a>div]:p-2 [&>a>div]:rounded-full [&>a>div]:cursor-pointer hover:[&>a>div]:bg-mine-shaft-700">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <IconBrandFacebook />
            </div>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <IconBrandInstagram />
            </div>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <IconBrandX />
            </div>
          </a>
        </div>
      </div>

      
      <div className="flex flex-col items-start text-left">
        <h3 className="text-bright-sun-400 font-semibold mb-4 text-lg">
          Product
        </h3>
        <div>
          <div>
            <Link
              to="/find-jobs"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Find Jobs
            </Link>
          </div>
          <div>
            <Link
              to="/find-talent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Find Talent
            </Link>
          </div>
          <div>
            <Link
              to="/post-job/:id"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Post Job
            </Link>
          </div>
          <div>
            <Link
              to="/posted-job/:id"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Posted Job
            </Link>
          </div>
          <div>
            <Link
              to="/job-history"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Job History
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-left">
        <h3 className="text-bright-sun-400 font-semibold mb-4 text-lg">
          Company
        </h3>
        <ul className="list-none space-y-1">
          <div>
            <Link
              to="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 mb-1 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link
              to="/terms-and-conditions"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition duration-300 ease-in-out"
            >
              Terms & Conditions
            </Link>
          </div>
        </ul>
      </div>

      <div className="flex flex-col items-start text-left">
        <h3 className="text-bright-sun-400 font-semibold mb-4 text-lg">
          Support
        </h3>
        <ul className="list-none space-y-1">
          <div>
            <Link
              to="/help-support"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 cursor-pointer  mb-1 hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Help & Support
            </Link>
          </div>
          <div>
            <Link
              to="/feedback"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              Feedback
            </Link>
          </div>
          <div>
            <Link
              to="/faqs"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-mine-shaft-100 text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 transition-all duration-300 ease-in-out"
            >
              FAQs
            </Link>
          </div>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Footer;
