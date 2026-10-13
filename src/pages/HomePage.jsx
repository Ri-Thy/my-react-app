import profile from "../assets/profile.jpg";
import stem from "../assets/stem.jpg";

function HomePage() {
return ( 
<div className="min-h-screen bg-[#0A192F] text-white">

  {/* Hero Section */}
  <section
    id="home"
    className="min-h-[600px] bg-gradient-to-r from-[#0A192F] to-[#233554] text-white flex items-center"
  >
    <div className="max-w-6xl mx-auto px-6 w-full">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-xl mb-3 text-sky-300">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Rithy Kheng
          </h1>

          <p className="text-xl mb-8 text-slate-300">
            Frontend Developer | Year 4 IT Student
          </p>

          <a
            href="#contact"
            className="inline-block bg-sky-400 text-[#0A192F] px-6 py-3 rounded-lg font-semibold hover:bg-sky-300 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Rithy Kheng"
            className="w-64 h-64 rounded-full object-cover border-8 border-sky-300 shadow-xl"
          />
        </div>

      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="py-20 bg-[#0A192F] text-white">
    <div className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-sky-400">
            Who I Am
          </h3>

          <p className="text-slate-300 leading-7">
            I am a Year 4 Information Technology student with a strong
            interest in frontend web development. I have basic knowledge
            of HTML, CSS, JavaScript, and React. I enjoy building websites,
            learning new technologies, and solving programming problems.
          </p>
        </div>

        <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-sky-400">
            My Education
          </h3>

          <p className="text-slate-300 leading-7">
            I am an Information Technology student who has gained
            experience with PHP, Laravel, and MySQL through academic
            projects. I am eager to improve my programming skills and
            gain practical experience in a professional environment.
          </p>
        </div>

        <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-sky-400">
            My Goal
          </h3>

          <p className="text-slate-300 leading-7">
            My goal is to become a professional frontend developer who
            creates responsive, user-friendly, and visually appealing
            websites and applications. I am looking for an internship
            where I can apply my knowledge, learn from experienced
            developers, and improve my practical skills.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Skills Section */}
  <section id="skills" className="py-20 bg-[#0A192F] text-white">
    <div className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-slate-700 text-center">
          <h3 className="text-xl font-bold text-sky-300">HTML</h3>
        </div>

        <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-slate-700 text-center">
          <h3 className="text-xl font-bold text-sky-300">CSS</h3>
        </div>

        <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-slate-700 text-center">
          <h3 className="text-xl font-bold text-sky-300">JavaScript</h3>
        </div>

        <div className="bg-[#112240] p-6 rounded-xl shadow-lg border border-slate-700 text-center">
          <h3 className="text-xl font-bold text-sky-300">React</h3>
        </div>

      </div>
    </div>
  </section>

  {/* STEM Section */}
  <section className="py-20 bg-[#0A192F] text-white">
    <div className="max-w-6xl mx-auto px-6 text-center">

      <h2 className="text-4xl font-bold mb-8">
        STEM Learning
      </h2>

      <p className="max-w-2xl mx-auto mb-8 text-slate-300 leading-7">
        I am interested in technology and STEM learning.
        Learning new technologies helps me improve my
        programming and problem-solving skills.
      </p>

      <img
        src={stem}
        alt="STEM Building"
        className="w-full max-w-2xl mx-auto rounded-xl shadow-lg border border-slate-700"
      />

    </div>
  </section>

  {/* Projects Section */}
<section id="projects" className="py-20 bg-[#0A192F] text-white">
  <div className="max-w-6xl mx-auto px-6">

    <p className="text-sky-400 text-center font-semibold tracking-widest mb-3">
      WHAT I'VE BUILT
    </p>

    <h2 className="text-4xl font-bold text-center mb-4">
      My Projects
    </h2>

    <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
      Here are some of my projects and practical experiences as a Year 4 IT student.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

        <div className="text-4xl mb-5"></div>

        <h3 className="text-2xl font-bold mb-4">
          Personal Portfolio Website
        </h3>

        <p className="mb-6 text-slate-300 leading-7">
          A personal portfolio website introducing my background, technical
          skills, education, and projects. Built using React and Tailwind CSS.
        </p>

        <p className="text-sky-400 font-semibold mb-6">
          React · Tailwind CSS · JavaScript
        </p>

        <a
          href="https://github.com/Ri-Thy/my-react-app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          View on GitHub →
        </a>

      </div>

      {/* Project 2 */}
      <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

        <div className="text-4xl mb-5"></div>

        <h3 className="text-2xl font-bold mb-4">
          Student Management System
        </h3>

        <p className="mb-6 text-slate-300 leading-7">
          A student management application that allows users to manage student
          records and view student information through a web interface.
        </p>

        <p className="text-sky-400 font-semibold mb-6">
          Laravel · PHP · SQLite
        </p>

        <a
          href="https://github.com/Ri-Thy/lab3-student-management"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          View on GitHub →
        </a>

      </div>

      {/* Project 3 */}
      <div className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700 hover:border-sky-400 hover:-translate-y-2 transition duration-300">

        <div className="text-4xl mb-5"></div>

        <h3 className="text-2xl font-bold mb-4">
          Firebase Student Dashboard
        </h3>

        <p className="mb-6 text-slate-300 leading-7">
          A React-based student management dashboard connected to Firebase
          Firestore for storing and managing student data.
        </p>

        <p className="text-sky-400 font-semibold mb-6">
          React · Firebase · Firestore
        </p>

        <a
          href="https://github.com/Ri-Thy/my-react-app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          View on GitHub →
        </a>

      </div>

    </div>
  </div>
</section>
  {/* Contact Section */}
  <section id="contact" className="py-20 bg-[#0A192F] text-white">
    <div className="max-w-xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("Thank you for your message! The contact form is not connected to a messaging service yet.");
        }}
        className="bg-[#112240] p-8 rounded-xl shadow-lg border border-slate-700"
      >

        <input
          type="text"
          placeholder="Your Name"
          aria-label="Your Name"
          required
          className="w-full bg-[#0A192F] text-white placeholder-slate-400 border border-slate-600 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
          required
          className="w-full bg-[#0A192F] text-white placeholder-slate-400 border border-slate-600 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />

        <textarea
          placeholder="Your Message"
          aria-label="Your Message"
          rows="5"
          required
          className="w-full bg-[#0A192F] text-white placeholder-slate-400 border border-slate-600 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-sky-400 text-[#0A192F] py-3 rounded-lg font-semibold hover:bg-sky-300 transition"
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
