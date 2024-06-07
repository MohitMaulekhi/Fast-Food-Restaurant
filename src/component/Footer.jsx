const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div>
          <h1 className=" font-semibold text-xl pb-4">Food Expert</h1>
          <p className=" text-sm">
          Your belly knows best.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-gray-500 transition-all cursor-pointer"
              href="/"
            >
              Our Dishes
            </a>
            <a
              className=" hover:text-gray-500 transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="hover:text-gray-500 transition-all cursor-pointer"
              href="/"
            >
              Foodexpert@email.com
            </a>
            <a
              className=" hover:text-gray-500 transition-all cursor-pointer"
              href="/"
            >
              +91 1236547890
            </a>
            <a
              className=" hover:text-gray-500 transition-all cursor-pointer"
              href="/"
            >
              Social media
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;