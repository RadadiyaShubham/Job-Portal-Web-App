import { Avatar, Rating } from "@mantine/core";
import { motion } from "framer-motion";
import { testimonials } from "../../Data/Data";

const Testimonials = () => {
  return (
    <motion.div
      className="mt-20 pb-5 p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">Users</span> say about us?
      </div>

      <motion.div
        className="flex justify-evenly gap-2 md-mx:flex-wrap mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {testimonials.map((data, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 md-mx:w-[48%] xs-mx:w-full w-[23%] border-bright-sun-400 p-3 border rounded-xl"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.7)",
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-2 items-center">
              <Avatar
                className="!h-14 !w-14"
                src={`/testimonials/${data.name}.png`}
                alt={data.name}
              />
              <div>
                <div className="text-lg sm-mx:text-base xs-mx:text-sm text-mine-shaft-100 font-semibold">
                  {data.name}
                </div>
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs text-mine-shaft-300">
              {data.testimonial}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
