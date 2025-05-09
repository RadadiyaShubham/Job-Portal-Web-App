import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconArrowLeft,
  IconUsers,
  IconBriefcase,
  IconTarget,
} from "@tabler/icons-react";
import { Button, Divider } from "@mantine/core";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider mx="md" size="xs" />

      {/* Hero Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-4/5 mx-auto mt-5 px-5">
          <div className="text-5xl text-bright-sun-400 font-semibold mb-5">
            About CareerLink
          </div>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            CareerLink is your go-to job portal, helping professionals connect
            with top companies effortlessly. We simplify the hiring process for
            both job seekers and employers.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: <IconUsers className="h-12 w-12 text-bright-sun-400" />,
            title: "For Job Seekers",
            description:
              "Discover the best jobs that match your skills and experience.",
          },
          {
            icon: <IconBriefcase className="h-12 w-12 text-bright-sun-400" />,
            title: "For Employers",
            description:
              "Post job listings and hire the best talent effortlessly.",
          },
          {
            icon: <IconTarget className="h-12 w-12 text-bright-sun-400" />,
            title: "Our Mission",
            description:
              "We aim to make job searching and hiring more efficient.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-mine-shaft-800 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h2 className="text-xl font-semibold text-bright-sun-400">
              {feature.title}
            </h2>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Image Gallery Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {["job1.png", "job2.png", "job3.png"].map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`/Job/${img}`}
              alt="Job Portal"
              className="w-full h-64 object-cover transition-all duration-300"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-semibold text-bright-sun-400">
          Start Your Career Journey Today!
        </h2>
        <p className="text-gray-300 text-lg mt-2">
          Join CareerLink and take the next step in your career.
        </p>
        <Button
          my="md"
          color="bright-sun.4"
          className="mt-4 px-6 py-3 text-lg font-bold bg-bright-sun-500 hover:bg-bright-sun-600 text-black rounded-md transition-all duration-300 shadow-lg"
          onClick={() => {
            navigate("/find-jobs");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 300);
          }}
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default About;
