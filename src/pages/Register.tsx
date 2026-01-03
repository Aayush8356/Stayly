import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const initialPayload = {
    first: "",
    last: "",
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [payload, setPayload] = useState({
    ...initialPayload,
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(payload);
    setPayload({ ...initialPayload });
  };
  return (
    <div className="min-h-[90dvh] m-4 grid lg:grid-cols-2 grid-cols-1 gap-4 ">
      <div className="h-full w-full object-cover rounded-lg">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/345742266.jpg?k=fb33c11240d6cebb94cb34bd6c68196f859be21e4e3cd306b80006a5bf389dfc&o="
          alt=""
        />
      </div>
      <div className=" h-full p-2">
        <h1 className="text-3xl font-semibold text-center">
          Create Your Account
        </h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 m-4 p-4">
            First Name
            <Input
              type="text"
              placeholder="First Name"
              value={payload.first}
              onChange={(e) =>
                setPayload({ ...payload, first: e.target.value })
              }
            />
            Last Name
            <Input
              type="text"
              placeholder="Last Name"
              value={payload.last}
              onChange={(e) => setPayload({ ...payload, last: e.target.value })}
            />
            Email
            <Input
              type="email"
              placeholder="Email"
              value={payload.email}
              onChange={(e) =>
                setPayload({ ...payload, email: e.target.value })
              }
            />
            Password
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pr-10"
                value={payload.password}
                onChange={(e) =>
                  setPayload({ ...payload, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            Confirm Password
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
                Register
              </Button>
            </div>
            <div className="self-center">
              <Link to="/login">Already have an account</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
