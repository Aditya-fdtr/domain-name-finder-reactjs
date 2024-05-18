import React, { useState } from "react";
import name from "@rstacruz/startup-name-generator";

// import components
import "./App.css";
import Header from "../header/Header";
import SearchBox from "../searchBox/SearchBox";
import ResultContainer from "../resultContain/ResultContainer";

const App = () => {
  const [headerText, setHeaderText] = useState("Just Name it");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!(inputText.length > 0));
    setSuggestedNames(inputText.length > 0 ? name(inputText) : []);
  };

  return (
    <div>
      <Header headTitle={headerText} headerExpanded={headerExpanded} />
      <SearchBox onInputChange={handleInputChange} />
      <ResultContainer suggestedNames={suggestedNames} />
    </div>
  );
};

export default App;
