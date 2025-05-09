import { motion } from "framer-motion";
import {
  Divider,
  TextInput,
  Textarea,
  Button,
  Card,
  Rating,
} from "@mantine/core";
import { IconUser, IconMail } from "@tabler/icons-react";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider mx="md" size="xs" />
      <motion.div
        className="text-center max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-4/5 mx-auto mt-5 bs-mx:px-10 md-mx:px-5">
          <div className="text-5xl font-semibold text-bright-sun-400 mb-5">
            Feedback
          </div>
          <p className="text-lg">
            We value your feedback! Share your experience with CareerLink and
            help us improve.
          </p>
        </div>
      </motion.div>

      <Divider
        size="sm"
        color="bright-sun-400"
        className="w-3/4 mx-auto my-6"
      />

      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card shadow="lg" p="lg" radius="md" className="bg-mine-shaft-800">
          <h2 className="text-2xl text-bright-sun-400 font-semibold mb-6 text-center">
            Share Your Thoughts
          </h2>

          <TextInput
            leftSection={<IconUser size={20} className="text-bright-sun-400" />}
            withAsterisk
            label="Your Name"
            placeholder="Enter your full name"
            className="mb-4"
          />
          <TextInput
            leftSection={<IconMail size={20} className="text-bright-sun-400" />}
            withAsterisk
            label="Email Address"
            placeholder="Enter your email"
            className="mb-4"
          />

          <h3 className="text-lg text-bright-sun-400 font-medium mb-2">
            Rate Your Experience
          </h3>
          <Rating defaultValue={4} size="lg" className="mb-4" />

          <Textarea
            label="Your Feedback"
            withAsterisk
            placeholder="Write your feedback here..."
            minRows={4}
            className="mb-4"
          />
          <Button
            fullWidth
            color="bright-sun.4"
            size="md"
            autoContrast
            className="mt-4 hover:scale-105 transition-transform duration-300"
          >
            Submit Feedback
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default Feedback;
