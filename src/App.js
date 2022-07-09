import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
}

render(<App />, document.getElementById("root"));
