import Navbar from "./Components/Navbar";
import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div id="home">
    <Navbar />
     <main>
     <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;