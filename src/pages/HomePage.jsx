import profile from "../assets/profile.jpg";
import stem from "../assets/stem.jpg";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[600px] bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center"
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-xl mb-3">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-bold mb-6">
                Rithy Kheng
              </h1>

              <p className="text-xl mb-8">
                Web Developer & English Student
              </p>

              <a
                href="#contact"
                className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                Contact Me
              </a>
            </div>

            <div className="flex justify-center">
              <img
                src={profile}
                alt="Rithy Kheng"
                className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                Who I Am
              </h3>

              <p>
                I am a student interested in web development,
                programming, and learning new technologies.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                My Education
              </h3>

              <p>
                I am studying English while developing my
                programming and web development skills.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl shadow">
              <h3 className="text-2xl font-bold mb-4 text-indigo-600">
                My Goal
              </h3>

              <p>
                My goal is to become a professional developer
                and create useful websites and applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            My Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">HTML</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">CSS</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">JavaScript</h3>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">React</h3>
            </div>

          </div>
        </div>
      </section>

      {/* STEM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-8">
            STEM Learning
          </h2>

          <p className="max-w-2xl mx-auto mb-8">
            I am interested in technology and STEM learning.
            Learning new technologies helps me improve my
            programming and problem-solving skills.
          </p>

          <img
            src={stem}
            alt="STEM Building"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-lg"
          />

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            My Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Portfolio Website
              </h3>

              <p className="mb-4">
                A responsive personal portfolio website
                created using React and Tailwind CSS.
              </p>

              <span className="text-indigo-600 font-semibold">
                React + Tailwind
              </span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                JavaScript Project
              </h3>

              <p className="mb-4">
                An interactive website demonstrating
                JavaScript functionality.
              </p>

              <span className="text-indigo-600 font-semibold">
                JavaScript
              </span>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Learning Project
              </h3>

              <p className="mb-4">
                A project created to practice modern
                web development technologies.
              </p>

              <span className="text-indigo-600 font-semibold">
                Web Development
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-10">
            Contact Me
          </h2>

          <form className="bg-gray-100 p-8 rounded-xl shadow-lg">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}

export default HomePage;