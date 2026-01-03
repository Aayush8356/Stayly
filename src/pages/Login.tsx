import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-[dvh-10%] m-4 grid lg:grid-cols-2 grid-cols-1 gap-4 ">
      <div className=" h-full w-full object-cover rounded-lg">
        <img
          src="https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg"
          alt=""
        />
      </div>
      <div className=" h-full max-w-[90%] p-4">
        <h1 className="text-3xl font-semibold text-center">Login Account</h1>
        <form onSubmit={() => console.log("form submitted")}>
          <div className="flex flex-col gap-6 m-4 p-10">
            UserName
            <Input type="email" placeholder="Email" />
            Password
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-blue-600">
                By signing up you agree to terms and conditions at Stayly.
              </h4>
              <Button className="flex w-[50%] self-center" type="submit">
                Login
              </Button>
            </div>
            <div className="self-center">
              <Link to="/register">Create Account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
