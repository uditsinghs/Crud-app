import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/context";
import { useNavigate } from "react-router-dom";
import { toast} from "react-hot-toast";

function UpdateUser() {
  const navigate = useNavigate()
  const { authozizationToken } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();

  const fetchSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authozizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUser(data.singleUserData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authozizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }
      navigate('/admin/users')
      const data = await response.json();
       toast.success(data.message)
    
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    fetchSingleUserData();
  }, [id]); 

  return (
    <div className="flex justify-center">
      <div className="w-[240px] rounded-xl shadow-2xl p-5">
        <h1 className="text-3xl font-bold border-b-2 border-x-blue-700 mb-5">
          Update User
        </h1>
        <form onSubmit={handleSumbit} className="flex flex-col gap-3">
          <label className="text-2xl font-semibold" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            id="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
            className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
          />

          <label className="text-2xl font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            id="email"
            required
            autoComplete="off"
            className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
            value={user.email}
            onChange={handleInput}
          />

          <label className="text-2xl font-semibold" htmlFor="phone">
            Phone No
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your Phone"
            id="phone"
            required
            value={user.phone}
            onChange={handleInput}
            autoComplete="off"
            className="p-2 rounded-lg text-xl outline-none bg-zinc-700"
          />

          <button
            type="submit"
            className="py-1 px-2 rounded-lg text-2xl font-bold bg-blue-500 hover:bg-blue-800 duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
