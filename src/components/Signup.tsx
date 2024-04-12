import { Button, Card, Input } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isValid from "../utils/isValidMail";

const Signup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);

  async function handleSubmit(e: { preventDefault: () => void }) {
    try {
      e.preventDefault();
      const user = {
        name,
        email,
        password,
      };
      if (name.trim().length === 0) {
        toast.error("Enter valid name");
        return;
      } else if (password.trim().length < 4) {
        toast.error("password should contain atleast 4 character");
        return;
      } else if (!isValid(email)) {
        toast.error("Enter valid email");
        return;
      }

      const { data } = await axios.post("user/signup", user);

      if (data.message === "user created") {
        toast.success(data.message);
        navigate("/");
      } else if (data.message === "user already exsist") {
        toast.success(data.message);
        navigate("/login");
      }
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-[85dvh] p-2">
      <form>
        <Card className="max-w-[400px] p-4 flex flex-col gap-3 mx-auto mt-[100px]">
          <Input
            type="text"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
          />
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Button
            onClick={handleSubmit}
            className="bg-cyen font-bold text-lg text-white"
          >
            Signup
          </Button>
          <p>
            Already have account{" "}
            <NavLink to="/login" className="text-blue-600">
              Login
            </NavLink>
          </p>
        </Card>
      </form>
    </div>
  );
};

export default Signup;
