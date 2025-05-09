import { motion } from "framer-motion";
import { Divider, Card } from "@mantine/core";

const PrivacyPolicy = () => {
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

      <div className="text-5xl font-semibold text-bright-sun-400 mb-5">Privacy Policy</div>
        <p className="text-lg">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when using CareerLink.
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
            Information We Collect
          </h2>
          <p className="mb-4">
            We collect personal information such as your name, email, phone
            number, and resume when you create an account or apply for jobs on
            CareerLink.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            Your information is used to match you with job opportunities,
            improve our services, and provide customer support.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            Data Security
          </h2>
          <p className="mb-4">
            We implement strict security measures to protect your data from
            unauthorized access or misuse.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            Third-Party Services
          </h2>
          <p className="mb-4">
            CareerLink may use third-party services for analytics, payment
            processing, or job matching. These providers have their own privacy
            policies.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            Your Rights & Choices
          </h2>
          <p className="mb-4">
            You can update or delete your personal information by accessing your
            CareerLink profile settings at any time.
          </p>

          <h2 className="text-2xl text-bright-sun-400 font-semibold mt-6 mb-4">
            Contact Us
          </h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <span className="text-bright-sun-400">support@careerlink.com</span>.
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
