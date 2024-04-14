import { Button, Card, Input } from "@nextui-org/react";
import axios from "axios";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isValid from "../utils/isValidMail";
//@ts-ignore
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  //@ts-ignore
  const { handleUser } = useContext(AuthContext);

  async function handleSubmit(e: { preventDefault: () => void }) {
    try {
      e.preventDefault();
      const user = {
        name,
        email,
        password,
      };
      console.log(user);

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
      setIsLoading(true);
      const { data } = await axios.post("user/signup", user);

      if (data.message === "user created") {
        toast.success(data.message);
        handleUser(data.user);
        navigate("/");
        setIsLoading(false);
      } else if (data.message === "user already exsist") {
        toast.success(data.message);
        setIsLoading(false);
        navigate("/login");
      }
      setEmail("");
      setName("");
      setPassword("");
      setIsLoading(false);
    } catch (error) {
      //@ts-ignore
      toast.error(error.response.data.message);
      setIsLoading(false);
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
          {isLoading ? (
            <Button
              isLoading
              className="px-2 py-3 bg-cyen rounded-md text-customWhite font-semibold hover:bg-[#9AE3E3]"
            >
              Loading
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-cyen font-bold text-lg text-white"
            >
              Signup
            </Button>
          )}
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
