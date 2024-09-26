import { useEffect, useState } from "react";
import { useAuth } from "../store/context";
import { Link } from 'react-router-dom'

function Users() {
  const [user, setUser] = useState([]);
  const { authozizationToken } = useAuth();

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/user", {
        method: "GET",
        headers: {
          Authorization: authozizationToken,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUser(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };



  const deleteUser = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authozizationToken,
        }
      });
      if (response.ok) {
        getAllUsers();
      }
    } catch (error) {
      console.log("error:" + error.message);
    }

  }

  //  get single
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-black text-center text-2xl font-bold pb-4 capitalize">users data</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-center">Edit</th>
                <th className="py-3 px-6 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {user.length > 0 ? (
                user.map((elem) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={elem._id}
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {elem.username}
                    </td>
                    <td className="py-3 px-6 text-left">{elem.email}</td>
                    <td className="py-3 px-6 text-left">{elem.phone}</td>
                    <td className="py-3 px-6 text-center">
                      <Link to={`/admin/users/edit/${elem._id}`}> <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                        Edit
                      </button></Link>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button onClick={() => deleteUser(elem._id)} className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-3 px-6 text-center text-2xl text-gray-600">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
