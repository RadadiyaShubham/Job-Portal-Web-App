import { Avatar } from "@mantine/core";
import { motion } from "framer-motion";
import { work } from "../../Data/Data";

const Working = () => {
  return (
    <motion.div
      className="mt-20 pb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <div className="text-4xl md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl text-center font-semibold mb-3 text-mine-shaft-100">
        How It <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-lg sm-mx:text-base xs-mx:text-sm mb-10 mx-auto text-mine-shaft-300 text-center w-1/2 sm-mx:w-11/12">
        Effortlessly navigate through the process and land your dream job.
      </div>

     
      <div className="flex px-16 bs-mx:px-10 md-mx:px-5 gap-2 md-mx:flex-col justify-between items-center">
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img className="w-[30rem]" src="./Working/Girl.png" alt="girl" />
          <motion.div
            className="w-36 flex xs-mx:w-28 top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Avatar
              className="!h-16 !w-16 xs-mx:!h-12 xs-mx:!w-12"
              src="avatar3.png"
              alt="it's me"
            />
            <div className="text-sm sm-mx:text-xs font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </motion.div>
        </motion.div>

     
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-3 bg-bright-sun-300 rounded-full shadow-lg">
                <img
                  className="w-12 h-12 md-mx:w-9 md-mx:h-9 sm-mx:w-7 sm-mx:h-7"
                  src={`Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div>
                <div className="text-mine-shaft-200 text-xl md-mx:text-lg sm-mx:text-base font-semibold">
                  {item.name}
                </div>
                <div className="text-mine-shaft-300 md-mx:text-sm sm-mx:text-xs">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Working;
