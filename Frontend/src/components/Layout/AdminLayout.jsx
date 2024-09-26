import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";


function AdminLayout() {
  return (
    <>
      <div>
        <nav>
          <ul className="w-20 flex gap-7 pl-6 ">
            <li className="text-2xl font-bold"><Link to='/admin/users'><FaUser /></Link></li>
            <li className="text-2xl font-bold"><Link to='/admin/contact'><MdOutlineContactSupport /></Link></li>
          </ul>
        </nav>
        <Outlet />
      
      </div>
    </>
  );
}

export default AdminLayout;
