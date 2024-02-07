import "./App.css";
import Hero from "./components/hero/Hero";
import SearchBar from "./components/searchBar/SearchBar";
import Footer from "./components/footer/Footer";
import AutocompleteSearch from "./components/SearchLogic/AutocompleteSearch";

export default function App() {
  return (
    <div>
      <main>
        <Hero />
        <SearchBar />
        <AutocompleteSearch />
      </main>
      <Footer />
    </div>
  );
}
