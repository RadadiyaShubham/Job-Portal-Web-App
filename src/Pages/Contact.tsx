import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  IconMail,
  IconPhone,
  IconUser,
  IconMessage,
} from "@tabler/icons-react";
import { Button, Divider, TextInput, Textarea, Card } from "@mantine/core";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-mine-shaft-950 font-['poppins'] px-4">
      <Divider mx="md" size="xs" />
      <div className="flex flex-col justify-center items-center">
      
        <motion.div
          className="text-center max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-4/5 mx-auto mt-5 bs-mx:px-10 md-mx:px-5">
      <div className="text-5xl font-semibold text-bright-sun-400 mb-5">Get in Touch</div>
          <p className="text-gray-300 text-lg mt-4 leading-relaxed">
            We'd love to hear from you! Fill out the form below or reach us
            directly.
          </p>
          </div>
        </motion.div>

        
        <Divider size="sm" color="bright-sun-400" my="md" className="w-3/4" />

        <motion.div
          className="max-w-lg w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card shadow="lg" p="lg" radius="md" className="bg-mine-shaft-200">
            <h2 className="text-2xl text-bright-sun-400 font-semibold mb-6 text-center">
              Send Us a Message
            </h2>
            <TextInput
              leftSection={
                <IconUser size={20} className="text-bright-sun-400" />
              }
              withAsterisk
              label="Your Name"
              placeholder="Enter your full name"
              className="mb-4"
            />
            <TextInput
              leftSection={
                <IconMail size={20} className="text-bright-sun-400" />
              }
              withAsterisk
              label="Email Address"
              placeholder="Enter your email"
              className="mb-4"
            />
            <TextInput
              leftSection={
                <IconPhone size={20} className="text-bright-sun-400" />
              }
              withAsterisk
              label="Phone Number"
              placeholder="Enter your phone number"
              className="mb-4"
            />
            <TextInput
              leftSection={
                <IconMessage size={20} className="text-bright-sun-400" />
              }
              withAsterisk
              label="Subject"
              placeholder="Enter the subject"
              className="mb-4"
            />
            <Textarea
              label="Message"
              withAsterisk
              placeholder="Write your message here..."
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
              Send Message
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
