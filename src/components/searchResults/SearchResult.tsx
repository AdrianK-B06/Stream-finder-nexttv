import React from "react";
import styles from "./SearchResult.module.css";

interface ResultProps {
  results: { title: string; id: number }[];
}

const SearchResult: React.FC<ResultProps> = ({ results }) => {
  return (
    <ul className={styles.resultsList}>
      {results.map((result) => (
        <li key={result.id} className={styles.resultItem}>
          {result.title}
        </li>
      ))}
    </ul>
  );
};

export default SearchResult;
