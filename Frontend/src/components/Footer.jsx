
function Footer() {
  return (
    <div className="flex flex-col ">
      <footer className="bg-gray-800 text-gray-300 py-4  h-[120px] ">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="#" className="text-gray-400 hover:text-white px-2">Home</a>
            <a href="#" className="text-gray-400 hover:text-white px-2">About</a>
            <a href="#" className="text-gray-400 hover:text-white px-2">Services</a>
            <a href="#" className="text-gray-400 hover:text-white px-2">Contact</a>
          </div>
          <div className="text-gray-400">&copy; 2024 MyWebsite. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer