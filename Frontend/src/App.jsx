import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Login from './Pages/Login';
import Register from './Pages/Regester';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './Pages/Error';
import { Toaster } from 'react-hot-toast';
import Logout from './Pages/Logout';
import AdminLayout from './components/Layout/AdminLayout';
import Users from './Pages/Users'; // Assuming Users and ContactAdmin are pages
import ContactAdmin from './Pages/ContactAdmin';
import UpdateUser from './Pages/UpdateUser';

function App() {
  return (
    <>
      <div className='bg-zinc-800 text-white'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<Error />} />

            {/* Nested routes for the admin layout */}
            <Route path='/admin' element={<AdminLayout />}>
              <Route path='users' element={<Users />} />
              <Route path='users/edit/:id' element={<UpdateUser />} /> 
              <Route path='contact' element={<ContactAdmin />} />
            </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div >
    </>
  );
}

export default App;
