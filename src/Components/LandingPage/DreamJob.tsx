import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";

const DreamJob = () => {
  return (
    <motion.div
      className="flex sm-mx:flex-col-reverse items-center px-16 bs-mx:p-10 md-mx:p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     
      <motion.div
        className="flex flex-col w-[45%] sm-mx:w-full gap-3"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream</span> <span>job</span> with us
        </div>
        <div className="text-lg md-mx:text-base sm-mx:text-sm text-mine-shaft-200">
          Good life begins with a good company. Start exploring thousands of
          jobs in one place.
        </div>

        <div className="flex gap-3 mt-5 items-center">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Type"
            placeholder="Full-time"
          />

          <motion.div
            className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconSearch className="h-[85%] w-[85%]" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="w-[55%] sm-mx:w-full flex items-center justify-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="w-[30rem] relative">
          <img src="/boy.png" alt="boy" />
          <motion.div
            className="absolute -right-10 xs-mx:top-[10%] xs-mx:-left-5 bs-mx:right-0 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.6 }}
          >
            <div className="text-center mb-1 text-sm text-mine-shaft-100">
              10K+ got jobs
            </div>
            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </motion.div>

          <motion.div
            className="absolute xs:-left-5 xs-mx:!right-0 w-fit bs-mx:top-[35%] xs-mx:top-[60%] top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.8 }}
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="/Google.png" alt="" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div className="flex gap-2 justify-around text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DreamJob;
