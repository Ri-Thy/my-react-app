import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const path = window.location.pathname;

  let page;

  if (path === "/login") {
    page = <LoginPage />;
  } else if (path === "/register") {
    page = <RegisterPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <div>
      <Navbar />

      <main>
        {page}
      </main>

      <Footer />
    </div>
  );
}

export default App;