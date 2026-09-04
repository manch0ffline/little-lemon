import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const handleSkipLink = (event) => {
    event.preventDefault();
    document.getElementById("main-content")?.focus();
  };

  return (
    <>
      <a className="skip-link" href="#main-content" onClick={handleSkipLink}>
        Skip to main content
      </a>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
