import { motion } from "framer-motion";
import { Divider, Card, Accordion } from "@mantine/core";

const FAQs = () => {
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
        <div className="text-5xl font-semibold text-bright-sun-400 mb-5 whitespace-nowrap">
  Frequently Asked Questions
</div>

          <p className="text-lg">
            Find answers to common questions about CareerLink.
          </p>
        </div>
      </motion.div>

      <Divider
        size="sm"
        color="bright-sun-400"
        className="w-3/4 mx-auto my-6"
      />

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card shadow="lg" p="lg" radius="md" className="bg-mine-shaft-800">
          <Accordion variant="separated">
            <Accordion.Item value="account">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I create an account?
              </Accordion.Control>
              <Accordion.Panel>
                Click on the "Sign Up" button on the homepage, fill in your
                details, and create a password.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="reset-password">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I reset my password?
              </Accordion.Control>
              <Accordion.Panel>
                Go to the login page, click on "Forgot Password?", and follow
                the instructions to reset your password.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="apply-job">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How do I apply for a job?
              </Accordion.Control>
              <Accordion.Panel>
                Browse available job listings, click on a job to view details,
                and click the "Apply Now" button.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="profile-edit">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How can I edit my profile?
              </Accordion.Control>
              <Accordion.Panel>
                Log in to your account, go to "Profile", and update your details
                as needed.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="resume">
              <Accordion.Control className="text-lg text-bright-sun-400">
                Can I upload multiple resumes?
              </Accordion.Control>
              <Accordion.Panel>
                No, currently, CareerLink allows only one resume per profile.
                You can update or replace it anytime.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="contact-support">
              <Accordion.Control className="text-lg text-bright-sun-400">
                How can I contact support?
              </Accordion.Control>
              <Accordion.Panel>
                You can email us at{" "}
                <span className="text-bright-sun-400">
                  mailto:support@careerlink.com
                </span>{" "}
                or use the contact form on our website.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Card>
      </motion.div>
    </div>
  );
};

export default FAQs;
