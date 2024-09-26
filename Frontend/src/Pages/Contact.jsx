import { useState, useEffect } from "react";
import { useAuth } from "../store/context";
import toast from "react-hot-toast";

function Contact() {
  const { user } = useAuth();
  const URL = "http://localhost:3000/api/form/contact"

  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (user) {
      setData({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {

          "Content-Type": "application/json"

        },
        body: JSON.stringify(data)

      })
      const dataFromServer = await response.json();
      console.log(dataFromServer);

      toast.success(dataFromServer.msg)
    } catch (error) {
      toast.error("message not delevered")
 
    }

  };

  return (
    <>
      <div className="grid grid-cols-2 min-h-screen w-full">
        <div className="p-[30px]">
          <img src="/images/registration.jpg" alt="contact_image" />
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="w-[300px] h-[350px] shadow-2xl rounded-xl p-5">
            <h1 className="mb-6 text-[20px] font-bold">Contact Us</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="username" className="text-xl">Enter your username</label>
              <input
                type="text"
                placeholder="username"
                className="p-2 rounded-md outline-none text-[15px] bg-zinc-700"
                id="username"
                name="username"
                value={data.username}
                onChange={handleInput}
                required
                autoComplete="off"
              />

              <label htmlFor="email" className="text-xl">Enter your email</label>
              <input
                type="email"
                placeholder="email"
                className="p-2 rounded-md outline-none bg-zinc-700 text-[15px]"
                id="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                required
                autoComplete="off"
              />

              <label htmlFor="message" className="text-xl">Enter your message</label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={handleInput}
                rows={7}
                placeholder="Enter your message here"
                className="outline-none bg-zinc-700 text-[15px] rounded-md"
              ></textarea>

              <button type="submit" className="py-2 bg-blue-500 text-center rounded-md cursor-pointer hover:bg-blue-800 duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14113.748258032154!2d79.5871001904844!3d27.827093644277486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fc37104887f9f%3A0xc4821b94f8fc20d8!2z4KSu4KS54KWN4KS44KWC4KSy4KSq4KWB4KSwIOCkieCksOCljeClniDgpKjgpK_gpL7gpJfgpL7gpILgpLUsIOCkieCkpOCljeCkpOCksCDgpKrgpY3gpLDgpKbgpYfgpLY!5e0!3m2!1shi!2sin!4v1722494608822!5m2!1shi!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          style={{ width: "100%" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
