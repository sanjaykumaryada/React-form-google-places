/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { GoogleLocationSuggest } from "../lib/GoogleLocationSuggest";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Map Component</h1>

      <GoogleLocationSuggest
        fieldProps={{
          onResultClick: (item) => {
            console.log({ item });
          },
          classes: {
            root: "suggestive-input-root",
            input: "suggestive-input-input",
            suggestionList: "suggestive-input-list",
            suggestionItem: "suggestive-input-item",
            highlighted: "suggestive-input-highlighted",
            activeSuggestion: "suggestive-input-item-active",
          },
        }}
      />
    </div>
  );
};

export default App;
