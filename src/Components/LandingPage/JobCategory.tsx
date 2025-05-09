import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { jobCategory } from "../../Data/Data";

const JobCategory = () => {
  return (
    <motion.div
      className="mt-20 pb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>
      <div className="text-lg sm-mx:text-base xs-mx:text-sm mb-10 mx-auto text-mine-shaft-300 text-center w-1/2 sm-mx:w-11/12">
        Explore diverse job opportunities tailored to your skills. Start your
        career journey today!
      </div>

      <Carousel
        slideSize="22%"
        slideGap="md"
        loop
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <motion.div
              className="flex flex-col items-center w-64 sm-mx:w-56 xsm-mx:w-48 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer my-5 transition duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.7)",
              }}
            >
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="h-8 w-8 sm-mx:h-6 sm-mx:w-6 xs-mx:h-4 xs-mx:w-4"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-100 text-xl sm-mx:text-lg xs-mx:text-base font-semibold">
                {category.name}
              </div>
              <div className="text-sm sm-mx:text-xs text-center text-mine-shaft-300">
                {category.desc}
              </div>
              <div className="text-bright-sun-300 text-lg sm-mx:text-sm xs-mx:text-sm">
                {category.jobs}+ new Job posted
              </div>
            </motion.div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default JobCategory;
