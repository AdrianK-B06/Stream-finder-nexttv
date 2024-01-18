import "./App.css";
import Hero from "./components/hero/Hero";
import SearchBar from "./components/searchBar/SearchBar";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div>
      <main>
        <Hero />
        <SearchBar />
        <Button />
      </main>
      <Footer />
    </div>
  );
}
