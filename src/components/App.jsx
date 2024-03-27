import { useState, useEffect, useCallback } from "react";
import "../App.css";

import QueryBuilder from "./QueryBuilder";
import QueryResult from "./QueryResult";

function App() {
  const [queryData, setQueryData] = useState([]);

  const handleSetQueryData = useCallback(
    (data) => setQueryData(() => data),
    [],
  );

  return (
    <div className="flex flex-col justify-between h-full p-10">
      <header>DataLoaf</header>
      <main className="flex flex-1 px-20 py-10 h-full">
        <QueryBuilder handleSetQueryData={handleSetQueryData} />
        <QueryResult queryData={queryData} />
      </main>
      <footer>Copyright stuff 2024</footer>
    </div>
  );
}

export default App;
