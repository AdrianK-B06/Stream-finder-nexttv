import "./App.css";

export default function App() {
  return (
    <div>
      <main>
        <h1>
          <span className="find">Find</span> <span className="your">your</span>
          <br />
          <span className="tv">next Tv</span>
          <br />
          <span className="adventure">Adventure</span>
        </h1>
        <input name="name" type="text" placeholder="Search your heart out..." />
        <button>Search!</button>
      </main>
      <footer>
        <p>“Streaming data powered by Watchmode.com"</p>
      </footer>
    </div>
  );
}
