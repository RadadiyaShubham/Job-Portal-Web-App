import { motion } from "framer-motion";
import { Divider, Card } from "@mantine/core";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 text-gray-300 font-['Poppins'] px-4">
      <Divider mx="md" size="xs" />
      <motion.div
        className="text-center max-w-3xl mx-auto mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-4/5 mx-auto mt-5 bs-mx:px-10 md-mx:px-5">
          <div className="text-5xl font-semibold text-bright-sun-400 mb-5">
            Terms & Conditions
          </div>
          <p className="text-lg">
            By using CareerLink, you agree to these terms and conditions. Please
            read them carefully.
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
          <h2 className="text-2xl text-bright-sun-400 font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using CareerLink, you acknowledge that you have
            read, understood, and agreed to be bound by these terms.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            2. User Responsibilities
          </h2>
          <p className="mb-4">
            You agree to use CareerLink in compliance with all applicable laws
            and regulations and not engage in any unlawful activities.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            3. Account Security
          </h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your
            account credentials and for any activities that occur under your
            account.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            4. Job Listings & Applications
          </h2>
          <p className="mb-4">
            CareerLink does not guarantee the accuracy or availability of job
            listings. Users should verify job details before applying.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            5. Termination of Service
          </h2>
          <p className="mb-4">
            CareerLink reserves the right to suspend or terminate accounts that
            violate these terms or engage in suspicious activity.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            6. Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these terms from time to time. Continued use of
            CareerLink constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            7. Contact Information
          </h2>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, contact us
            at
            <span className="text-bright-sun-400"> mailto:support@careerlink.com</span>
            .
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default TermsConditions;
