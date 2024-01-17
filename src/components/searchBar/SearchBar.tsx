import style from "./searchBar.module.css";

export default function SearchBar() {
  return (
    <>
      <input
        className={style.searchInput}
        name="name"
        type="text"
        placeholder="Search..."
      />
    </>
  );
}
