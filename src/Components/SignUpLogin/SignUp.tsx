import {
  Anchor,
  PasswordInput,
  TextInput,
  Checkbox,
  Button,
  Radio,
  Group,
  LoadingOverlay,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";


const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "",
};

const SignUp = () => {
  const [data, setData] = useState<{ [key: string]: string }>(initialFormState);
  const [formError, setFormError] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: any | string) => {
    if (typeof event === "string") {
      setData((prevData) => ({ ...prevData, accountType: event }));
      return;
    }

    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setFormError((prevErrors) => ({
      ...prevErrors,
      [name]: signupValidation(name, value),
    }));

    if (name === "password" && data.confirmPassword !== "") {
      let err = data.confirmPassword !== value ? "Passwords do not match." : "";
      setFormError((prevErrors) => ({
        ...prevErrors,
        confirmPassword: err,
      }));
    }

    if (name === "confirmPassword") {
      let err = data.password !== value ? "Passwords do not match." : "";
      setFormError((prevErrors) => ({
        ...prevErrors,
        confirmPassword: err,
      }));
    }
  };

  const handleSubmit = () => {
    let valid = true;
    let newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key !== "accountType") {
        if (key !== "confirmPassword") {
          newFormError[key] = signupValidation(key, data[key]);
        } else if (data[key] !== data["password"]) {
          newFormError[key] = "Passwords do not match.";
        }
        if (newFormError[key]) valid = false;
      }
    }

    setFormError(newFormError);
    if (valid) {
      setLoading(true);
      registerUser(data)
        .then(() => {
          setData(initialFormState);
          notifications.show({
            title: "Registration Successful",
            message: "Redirecting to login page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });

          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
          notifications.show({
            title: "Registration Failed",
            message:
              err.response?.data?.errormessage || "Something went wrong.",
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2"
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "bright-sun.4", type: "bars" }}
      />
      <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
        <div className="text-2xl font-semibold">Create Account</div>
        <TextInput
          value={data.name}
          error={formError.name}
          onChange={handleChange}
          name="name"
          withAsterisk
          label="Full Name"
          placeholder="Your name"
        />
        <TextInput
          value={data.email}
          error={formError.email}
          onChange={handleChange}
          name="email"
          withAsterisk
          leftSection={<IconAt size={16} />}
          label="Email"
          placeholder="Your email"
        />
        <PasswordInput
          value={data.password}
          error={formError.password}
          onChange={handleChange}
          name="password"
          withAsterisk
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Password"
          placeholder="password"
        />
        <PasswordInput
          value={data.confirmPassword}
          error={formError.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          withAsterisk
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Confirm Password"
          placeholder="Confirm password"
        />
        <Radio.Group
          value={data.accountType}
          onChange={(value) => handleChange(value)}
          label="You are?"
          withAsterisk
        >
          <Group mt="xs">
            <Radio
              className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
              autoContrast
              value="APPLICANT"
              label="Applicant"
            />
            <Radio
              className="py-4 px-6 border hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
              autoContrast
              value="EMPLOYER"
              label="Employer"
            />
          </Group>
        </Radio.Group>

        <Button
          loading={loading}
          onClick={handleSubmit}
          autoContrast
          variant="filled"
        >
          Sign Up
        </Button>

        <div className="mx-auto">
          Have an account?{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/login");
              setFormError({});
              setData(initialFormState);
            }}
          >
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUp;
