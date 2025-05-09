import { TextInput, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const Subscribe = () => {
  const matches = useMediaQuery("(max-width: 639px)");
  const matches1 = useMediaQuery("(max-width: 475px)"); 

  return (
    <motion.div
      className="mt-32 flex items-center bg-mine-shaft-900 mx-20 sm-mx:mx-5 py-3 px-10 rounded-xl justify-between flex-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-4xl whitespace-nowrap md-mx:text-3xl sm-mx:text-2xl xs-mx:text-xl w-2/5 bs-mx:w-4/5 text-center font-semibold text-mine-shaft-100"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Never Want to Miss Any<span className="text-bright-sun-400"> Job News?</span>
      </motion.div>

      <motion.div
        className="flex gap-4 rounded-xl xs-mx:flex-col bg-mine-shaft-700 px-5 py-2 items-center"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <TextInput
          className="[&_input]:text-mine-shaft-100 font-semibold"
          variant="unstyled"
          placeholder="your@gmail.com"
          size={matches1 ? "sm" : matches ? "md" : "xl"}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            className="!rounded-lg"
            size={matches1 ? "sm" : matches ? "md" : "lg"}
            color="bright-sun.4"
            variant="filled"
          >
            Subscribe
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Subscribe;