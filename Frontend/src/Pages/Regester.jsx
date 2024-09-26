import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../store/context";

const URL = "http://localhost:3000/user/signup";

function Register() {
  const { storeDataInLS } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      if (response.status === 201) {
        storeDataInLS(data.token);
        toast.success("Registered successfully");
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate('/');
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="grid w-full grid-cols-2 items-center justify-center">
      <div className="bg-cover bg-center">
        <img src="/images/regestration.jpg" alt="register_image" />
      </div>

      <div className="flex justify-center">
        <div className="w-[240px] rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold border-b-2 border-x-blue-700 mb-5">Registration Form</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-2xl font-semibold" htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your Username"
              id="username"
              required
              autoComplete="off"
              onChange={handleInput}
              value={user.username}
              className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
            />

            <label className="text-2xl font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
              required
              autoComplete="off"
              className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
              onChange={handleInput}
              value={user.email}
            />

            <label className="text-2xl font-semibold" htmlFor="phone">Phone No</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your Phone"
              id="phone"
              required
              onChange={handleInput}
              value={user.phone}
              autoComplete="off"
              className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
            />

            <label className="text-2xl font-semibold" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              id="password"
              required
              onChange={handleInput}
              value={user.password}
              autoComplete="off"
              className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
            />

            <button type="submit" className="py-1 px-2 rounded-lg text-2xl font-bold bg-blue-500 hover:bg-blue-800 duration-300">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
