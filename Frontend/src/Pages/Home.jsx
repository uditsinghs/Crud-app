import { Link } from 'react-router-dom';
import { useAuth } from '../store/context';
import { useState, useEffect } from 'react';

function Home() {
  const { user } = useAuth();
  const [name, setName] = useState('');

  useEffect(() => {
    if (user?.username) {
      setName(user.username);
    }
  }, [user]);

  return (
    <>
      <div className="grid grid-cols-2 w-full">
        <div className="flex items-center flex-col justify-center gap-3">
          <h1 className="text-8xl font-bold leading-loose capitalize">
            hii {name ? name : "Udit"}
          </h1>
          <p className="text-xl text-wrap whitespace-normal">
            I am a dedicated full stack web developer, currently in my final year of BCA at Future University. My journey in web development has been shaped by a deep interest in the MERN stack, where I've honed my skills in building dynamic and responsive web applications. With a solid foundation in both frontend and backend technologies, I enjoy creating efficient and scalable solutions. My experience ranges from setting up Express servers with environment variables to developing engaging user interfaces with React.js. As I continue to grow and tackle new challenges, I am passionate about leveraging my knowledge to create innovative web solutions that make a meaningful impact.
          </p>
          <div className='flex gap-5'>
            <span className='py-3 px-7 bg-blue-600 rounded-lg text-xl hover:bg-blue-900 duration-300 hover:text-yellow-600'>
              <Link to="/contact">Connect Us</Link>
            </span>
            <span className='py-3 px-7 bg-blue-600 rounded-lg text-xl hover:bg-blue-900 duration-300 hover:text-yellow-600'>
              <Link to="/about">Explore More</Link>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/home.png" alt="home_image" />
        </div>
      </div>
    </>
  );
}

export default Home;
