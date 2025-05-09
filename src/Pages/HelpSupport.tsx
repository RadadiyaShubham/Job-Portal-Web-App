import { motion } from "framer-motion";
import { Divider, Card, Accordion } from "@mantine/core";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 text-gray-300 font-['Poppins'] px-6 py-10">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-bright-sun-400 tracking-wide mb-4">
          Help & Support
        </h1>
        <p className="text-lg">
          Need assistance? Find answers to frequently asked questions or contact us for support.
        </p>
      </motion.div>

      <Divider size="sm" color="bright-sun-400" className="w-3/4 mx-auto my-6" />

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card shadow="lg" p="lg" radius="md" className="bg-mine-shaft-800">
          <h2 className="text-2xl text-bright-sun-400 font-semibold mb-6 text-center">
            Frequently Asked Questions (FAQ)
          </h2>

          <Accordion variant="separated">
            <Accordion.Item value="account">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I create an account?
              </Accordion.Control>
              <Accordion.Panel>
                Click on the "Sign Up" button on the homepage, fill in your details, and create a password.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="reset-password">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I reset my password?
              </Accordion.Control>
              <Accordion.Panel>
                Go to the login page, click on "Forgot Password?", and follow the instructions to reset your password.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="apply-job">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I apply for a job?
              </Accordion.Control>
              <Accordion.Panel>
                Browse available job listings, click on a job to view details, and click the "Apply Now" button.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="contact-support">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How can I contact support?
              </Accordion.Control>
              <Accordion.Panel>
                You can email us at <span className="text-bright-sun-400">support@careerlink.com</span> or use the contact form on our website.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Card>

        <Card shadow="lg" p="lg" radius="md" className="bg-mine-shaft-800 mt-8">
          <h2 className="text-2xl text-bright-sun-400 font-semibold mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-center mb-4">
            If you need further assistance, feel free to reach out to us.
          </p>
          <p className="text-center">
            📧 Email: <span className="text-bright-sun-400">support@careerlink.com</span>
          </p>
          <p className="text-center">
            📞 Phone: <span className="text-bright-sun-400">+91 12345 67890</span>
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default HelpSupport;
