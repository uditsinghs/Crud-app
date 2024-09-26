import { Link } from 'react-router-dom'
import { useAuth } from '../store/context'
function Navbar() {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <div className='flex h-[70px] w-full justify-around shadow-2xl'>
        <div>
          <h1 className='text-2xl font-extrabold p-[25px]'>

            Tech  U D I T
          </h1>
        </div>
        <div>
          <ul className='flex gap-4 p-[25px] text-xl '>
            <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/">Home</Link></li>
            <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/about">About</Link></li>
            <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/services">Services</Link></li>
            <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/contact">Contact</Link></li>  {isLoggedIn ? <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/logout">Logout</Link></li> : <><li className='hover:border-b-4 hover:border-blue-700'> <Link to="/login">Login</Link></li>
              <li className='hover:border-b-4 hover:border-blue-700'> <Link to="/register">Regester</Link></li>
            </>
            }

          </ul>
        </div>
      </div >

    </>
  )
}

export default Navbar