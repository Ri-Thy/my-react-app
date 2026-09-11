function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="/"
          className="text-2xl font-bold text-indigo-600"
        >
          Rithy Kheng
        </a>

        <div className="flex gap-6 items-center">
          <a
            href="/"
            className="hover:text-indigo-600 font-medium"
          >
            Home
          </a>

          <a
            href="/#about"
            className="hover:text-indigo-600 font-medium"
          >
            About
          </a>

          <a
            href="/#skills"
            className="hover:text-indigo-600 font-medium"
          >
            Skills
          </a>

          <a
            href="/#projects"
            className="hover:text-indigo-600 font-medium"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="hover:text-indigo-600 font-medium"
          >
            Contact
          </a>

          <a
            href="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </a>

          <a
            href="/register"
            className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50"
          >
            Register
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;