import { Button, Card, Input } from "@nextui-org/react";
import axios from "axios";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isValid from "../utils/isValidMail";
//@ts-ignore
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState("");
  //@ts-ignore
  const { handleUser } = useContext(AuthContext);
  async function handleSubmit(e: { preventDefault: () => void }) {
    try {
      e.preventDefault();
      const user = {
        email,
        password,
      };

      if (!isValid(email)) {
        toast.error("Enter valid email");
        return;
      }
      if (password.trim().length === 0) {
        toast.error("password should contain atleast 4 character");
        return;
      }
      setIsLoading(true);
      const { data } = await axios.post("user/login", user);
      if (data.message === "signin successsfully") {
        toast.success("login successfully");
        handleUser(data.user);
        navigate("/");
      }
      setEmail("");
      setPassword("");
      setIsLoading(true);
    } catch (error: any) {
      toast.error(error.response.data.message);
      setIsLoading(true);
    }
  }
  return (
    <div className="min-h-[85dvh] p-2">
      <form>
        <Card className="max-w-[400px] p-4 flex flex-col gap-3 mx-auto mt-[100px]">
          <Input
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
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
              Login
            </Button>
          )}
          <p>
            Don't you have account{" "}
            <NavLink to="/signup" className="text-blue-600">
              Signup
            </NavLink>
          </p>
        </Card>
      </form>
    </div>
  );
};

export default Login;
